(() => {
  'use strict';

  const TAB_IDS = Object.freeze(['motivation', 'journey', 'characters', 'classroom']);
  const RESULT_TYPES = Object.freeze([
    Object.freeze({
      key: 'selfControl',
      name: '신중한 다람쥐형',
      file: '01_squirrel_self_control_result.png',
      summary: '확인하고 기준을 지키는 신중한 선택'
    }),
    Object.freeze({
      key: 'hydration',
      name: '든든한 곰형',
      file: '02_bear_hydration_result.png',
      summary: '몸 상태와 회복을 먼저 챙기는 선택'
    }),
    Object.freeze({
      key: 'courage',
      name: '재빠른 개구리형',
      file: '03_frog_courage_result.png',
      summary: '위험을 발견하면 주변에도 알려주는 선택'
    }),
    Object.freeze({
      key: 'medicineKnowledge',
      name: '꼼꼼한 부엉이형',
      file: '04_owl_medicine_knowledge_result.png',
      summary: '성분과 용법을 꼼꼼히 확인하는 선택'
    }),
    Object.freeze({
      key: 'sleep',
      name: '균형 잡힌 토끼형',
      file: '05_rabbit_sleep_result.png',
      summary: '수면과 생활 리듬을 지키는 선택'
    }),
    Object.freeze({
      key: 'focus',
      name: '꾸준한 거북이형',
      file: '06_turtle_focus_result.png',
      summary: '기본을 꾸준히 관리하는 선택'
    }),
    Object.freeze({
      key: 'balance',
      name: '침착한 미어캣형',
      file: '07_meerkat_balance_result.png',
      summary: '여러 건강 지표를 고르게 살피는 선택'
    }),
    Object.freeze({
      key: 'caffeineWarning',
      name: '점검이 필요한 햄스터형',
      file: '08_hamster_caffeine_warning_result.png',
      summary: '카페인과 복용 습관을 다시 살펴보라는 신호'
    })
  ]);

  function resolveTabId(hash) {
    const id = String(hash || '').replace(/^#/, '');
    return TAB_IDS.includes(id) ? id : TAB_IDS[0];
  }

  function tabElement(tabId) {
    return document.getElementById(`tab-${tabId}`);
  }

  function panelElement(tabId) {
    return document.getElementById(`panel-${tabId}`);
  }

  function activateTab(tabId, options = {}) {
    if (typeof document === 'undefined') return resolveTabId(`#${tabId}`);

    const activeId = TAB_IDS.includes(tabId) ? tabId : TAB_IDS[0];
    const updateHash = options.updateHash !== false;
    const moveFocus = options.focus === true;

    for (const id of TAB_IDS) {
      const tab = tabElement(id);
      const panel = panelElement(id);
      const selected = id === activeId;

      if (tab) {
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      }
      if (panel) panel.hidden = !selected;
    }

    const activeTab = tabElement(activeId);
    if (moveFocus && activeTab) {
      activeTab.focus();
      if (typeof activeTab.scrollIntoView === 'function') {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }

    if (updateHash && typeof window !== 'undefined' && window.history?.replaceState) {
      window.history.replaceState(null, '', `#${activeId}`);
    }

    return activeId;
  }

  function adjacentTabId(currentId, direction) {
    const currentIndex = Math.max(0, TAB_IDS.indexOf(currentId));
    const nextIndex = (currentIndex + direction + TAB_IDS.length) % TAB_IDS.length;
    return TAB_IDS[nextIndex];
  }

  function handleTabKeydown(event, currentId) {
    let nextId = null;

    switch (event.key) {
      case 'ArrowRight':
        nextId = adjacentTabId(currentId, 1);
        break;
      case 'ArrowLeft':
        nextId = adjacentTabId(currentId, -1);
        break;
      case 'Home':
        nextId = TAB_IDS[0];
        break;
      case 'End':
        nextId = TAB_IDS[TAB_IDS.length - 1];
        break;
      default:
        return;
    }

    event.preventDefault();
    activateTab(nextId, { updateHash: true, focus: true });
  }

  function initTabs() {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    for (const id of TAB_IDS) {
      const tab = tabElement(id);
      if (!tab) continue;
      tab.addEventListener('click', () => activateTab(id, { updateHash: true }));
      tab.addEventListener('keydown', event => handleTabKeydown(event, id));
    }

    window.addEventListener('hashchange', () => {
      activateTab(resolveTabId(window.location.hash), { updateHash: false });
    });

    activateTab(resolveTabId(window.location.hash), { updateHash: false });
  }

  const api = { TAB_IDS, RESULT_TYPES, resolveTabId, activateTab, initTabs };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.TeacherGuide = api;
  if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', initTabs, { once: true });
})();
