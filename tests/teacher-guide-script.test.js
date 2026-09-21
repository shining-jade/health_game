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

console.log('teacher guide script contract passed');
