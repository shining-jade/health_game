const path = require('path');
const guide = require(path.join(__dirname, '..', 'teacher-guide', 'script.js'));

const validTabs = ['motivation', 'journey', 'characters', 'classroom'];
for (const id of validTabs) {
  if (guide.resolveTabId(`#${id}`) !== id) throw new Error(`유효 해시 처리 실패: ${id}`);
}
for (const hash of ['', '#', '#unknown', '#MOTIVATION']) {
  if (guide.resolveTabId(hash) !== 'motivation') throw new Error(`기본 탭 처리 실패: ${hash}`);
}

if (!Array.isArray(guide.RESULT_TYPES) || guide.RESULT_TYPES.length !== 8) {
  throw new Error('결과 유형은 정확히 8개여야 함');
}
const keys = new Set(guide.RESULT_TYPES.map(item => item.key));
if (keys.size !== 8) throw new Error('결과 유형 key 중복');

if (guide.resultImagePath('card.png') !== '../assets/type-result-cards/card.png') {
  throw new Error('결과 카드 상대 경로 오류');
}

for (const result of guide.RESULT_TYPES) {
  const markup = guide.buildResultCardMarkup(result);
  for (const expected of [result.key, result.name, result.summary, result.file, 'button']) {
    if (!markup.includes(expected)) throw new Error(`${result.name} 마크업 누락: ${expected}`);
  }
}

const state = guide.createDialogState();
if (state.opener !== null) throw new Error('모달 초기 opener는 null이어야 함');

console.log('teacher guide script contract passed');
