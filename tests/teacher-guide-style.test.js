const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'teacher-guide', 'styles.css');
if (!fs.existsSync(cssPath)) throw new Error('teacher-guide/styles.css 없음');
const css = fs.readFileSync(cssPath, 'utf8');

const contracts = [
  [':root', '디자인 토큰'],
  ['max-width: 1100px', '본문 최대 폭'],
  ['grid-template-columns: repeat(4, minmax(0, 1fr))', '데스크톱 카드 4열'],
  ['@media (max-width: 860px)', '태블릿 구간'],
  ['@media (max-width: 560px)', '휴대폰 구간'],
  ['min-height: 44px', '터치 영역'],
  ['overflow-x: auto', '모바일 탭 스크롤'],
  ['prefers-reduced-motion: reduce', '동작 감소'],
  ['.js .tab-panel[hidden]', '자바스크립트 탭 숨김'],
  [':focus-visible', '키보드 포커스']
];
for (const [needle, label] of contracts) {
  if (!css.includes(needle)) throw new Error(`${label} 규칙 없음: ${needle}`);
}
if (/font-size:\s*(?:1[0-4]|[0-9])px/.test(css)) {
  throw new Error('15px 미만의 고정 글꼴 크기 사용 금지');
}
console.log('teacher guide style contract passed');
