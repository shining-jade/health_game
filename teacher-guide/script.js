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

  function resultImagePath(file) {
    return `../assets/type-result-cards/${file}`;
  }

  function buildResultCardMarkup(result) {
    return `
      <button class="character-card" type="button" data-result-key="${result.key}" aria-label="${result.name} 결과 카드 크게 보기">
        <img src="${resultImagePath(result.file)}" alt="" loading="lazy">
        <span class="character-card__name">${result.name}</span>
        <span class="character-card__summary">${result.summary}</span>
      </button>
    `.trim();
  }

  function createDialogState() {
    return { opener: null, resultName: '' };
  }

  const dialogState = createDialogState();

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

  function ensureTabVisible(tab, animate = false) {
    const list = tab?.parentElement;
    if (!list || typeof list.scrollTo !== 'function') return;

    const tabStart = tab.offsetLeft;
    const tabEnd = tabStart + tab.offsetWidth;
    const visibleStart = list.scrollLeft;
    const visibleEnd = visibleStart + list.clientWidth;
    if (tabStart >= visibleStart && tabEnd <= visibleEnd) return;

    const left = Math.max(0, tabStart - (list.clientWidth - tab.offsetWidth) / 2);
    list.scrollTo({ left, behavior: animate ? 'smooth' : 'auto' });
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
    }
    if (activeTab) ensureTabVisible(activeTab, moveFocus);

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

  function renderCharacterGrid() {
    if (typeof document === 'undefined') return;
    const grid = document.getElementById('character-grid');
    if (!grid) return;

    grid.innerHTML = RESULT_TYPES.map(buildResultCardMarkup).join('');
    for (const button of grid.querySelectorAll('[data-result-key]')) {
      button.addEventListener('click', () => {
        const result = RESULT_TYPES.find(item => item.key === button.dataset.resultKey);
        if (result) openResultDialog(result, button);
      });
    }
  }

  function dialogElements() {
    if (typeof document === 'undefined') return {};
    return {
      dialog: document.getElementById('result-dialog'),
      closeButton: document.getElementById('result-dialog-close'),
      title: document.getElementById('result-dialog-title'),
      image: document.getElementById('result-dialog-image'),
      error: document.querySelector('#result-dialog .dialog-error')
    };
  }

  function openResultDialog(result, opener) {
    const { dialog, closeButton, title, image, error } = dialogElements();
    if (!dialog || !closeButton || !title || !image || !error || !result) return;

    dialogState.opener = opener || null;
    dialogState.resultName = result.name;
    title.textContent = result.name;
    error.textContent = '';
    image.hidden = false;
    image.alt = `${result.name} 결과 카드`;
    image.src = resultImagePath(result.file);

    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
      dialog.classList.add('dialog-fallback-open');
    }
    closeButton.focus();
  }

  function closeResultDialog() {
    const { dialog } = dialogElements();
    if (!dialog) return;

    if (typeof dialog.close === 'function' && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
      dialog.classList.remove('dialog-fallback-open');
    }

    const opener = dialogState.opener;
    dialogState.opener = null;
    dialogState.resultName = '';
    if (opener?.isConnected && typeof opener.focus === 'function') opener.focus();
  }

  function applyResultImageError(image, error, resultName) {
    image.hidden = true;
    error.textContent = `${resultName || '결과 카드'} 이미지를 불러오지 못했습니다.`;
  }

  function initResultDialog() {
    const { dialog, closeButton, image, error } = dialogElements();
    if (!dialog || !closeButton || !image || !error || dialog.dataset.guideReady === 'true') return;

    dialog.dataset.guideReady = 'true';
    closeButton.addEventListener('click', closeResultDialog);
    dialog.addEventListener('cancel', event => {
      event.preventDefault();
      closeResultDialog();
    });
    dialog.addEventListener('click', event => {
      if (event.target === dialog) closeResultDialog();
    });
    image.addEventListener('error', () => {
      applyResultImageError(image, error, dialogState.resultName);
    });
    image.addEventListener('load', () => {
      image.hidden = false;
      error.textContent = '';
    });
  }

  const api = {
    TAB_IDS,
    RESULT_TYPES,
    resolveTabId,
    ensureTabVisible,
    activateTab,
    initTabs,
    resultImagePath,
    buildResultCardMarkup,
    createDialogState,
    renderCharacterGrid,
    openResultDialog,
    closeResultDialog,
    applyResultImageError,
    initResultDialog
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof window !== 'undefined') window.TeacherGuide = api;
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      initTabs();
      renderCharacterGrid();
      initResultDialog();
    }, { once: true });
  }
})();
