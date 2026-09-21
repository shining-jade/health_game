const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'teacher-guide', 'index.html');
if (!fs.existsSync(htmlPath)) throw new Error('teacher-guide/index.html 없음');

const html = fs.readFileSync(htmlPath, 'utf8');
const requiredText = [
  '왜 만들었나요',
  '7일간의 선택',
  '결과 캐릭터',
  '수업 활용 · 제작 이야기',
  'D-7', 'D-5', 'D-3', 'D-Day',
  '체력', '지식', '카페인 관리', '컨디션', '판단력', '사회성',
  'Claude', 'Codex', '이미지 생성 도구'
];
for (const text of requiredText) {
  if (!html.includes(text)) throw new Error(`필수 문구 없음: ${text}`);
}

const panelIds = ['motivation', 'journey', 'characters', 'classroom'];
for (const id of panelIds) {
  if (!html.includes(`id="tab-${id}"`)) throw new Error(`탭 없음: ${id}`);
  if (!html.includes(`id="panel-${id}"`)) throw new Error(`패널 없음: ${id}`);
}

if (!/href="\.\.\/index\.html"[^>]*>[^<]*게임 체험하기/.test(html)) {
  throw new Error('기존 학생 게임 링크가 없음');
}
if (/<section[^>]+id="panel-[^"]+"[^>]+hidden/i.test(html)) {
  throw new Error('무자바스크립트 환경에서 패널을 숨기면 안 됨');
}

const cardFiles = [
  '01_squirrel_self_control_result.png',
  '02_bear_hydration_result.png',
  '03_frog_courage_result.png',
  '04_owl_medicine_knowledge_result.png',
  '05_rabbit_sleep_result.png',
  '06_turtle_focus_result.png',
  '07_meerkat_balance_result.png',
  '08_hamster_caffeine_warning_result.png'
];
for (const file of cardFiles) {
  const asset = path.join(root, 'assets', 'type-result-cards', file);
  if (!fs.existsSync(asset)) throw new Error(`결과 카드 자산 없음: ${file}`);
  if (!html.includes(`../assets/type-result-cards/${file}`)) {
    throw new Error(`무자바스크립트 카드 링크 없음: ${file}`);
  }
}

if (!/<noscript>[\s\S]*8가지 결과 카드[\s\S]*<\/noscript>/i.test(html)) {
  throw new Error('무자바스크립트 결과 카드 안내 없음');
}

console.log('teacher guide content contract passed');
