const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

function choiceBlock(label) {
  const marker = `"text": "${label}"`;
  const start = html.indexOf(marker);
  if (start < 0) throw new Error(`선택을 찾을 수 없음: ${label}`);
  const next = html.indexOf('\n            {', start + marker.length);
  return html.slice(start, next < 0 ? start + 1200 : next);
}

function expectContains(label, snippets) {
  const block = choiceBlock(label);
  for (const snippet of snippets) {
    if (!block.includes(snippet)) {
      throw new Error(`${label}: ${snippet} 기록이 없음`);
    }
  }
}

expectContains('💊 그냥 빈속에 먹는다.', ['"analgesicDoses": 1', '"fastingMed": true']);
expectContains('🥛 편의점서 우유·빵 먹고 먹는다.', ['"analgesicDoses": 1']);
expectContains('🍱 점심까지 기다렸다 식후 복용한다.', ['"analgesicDoses": 1']);
expectContains('💊 아프니까 일단 먹는다.', ['"analgesicDoses": 1', '"fastingMed": true']);
expectContains('💊 두통약을 바로 먹는다.', [
  '"analgesicDoses": 2',
  '"caffeineMg": 30',
  '"comboMedCaffeine": true'
]);
expectContains('📋 두 약의 성분표를 비교한다.', ['"analgesicDoses": 1', '"caffeineMg": 30']);
expectContains('🩺 보건실에 물어본다.', ['"analgesicDoses": 1', '"caffeineMg": 30']);
expectContains('💊 그래도 두통이 심해 먹는다.', [
  '"analgesicDoses": 1',
  '"comboMedCaffeine": true'
]);
expectContains('⚡ \\"오 좋은데?\\" 따라 한다.', [
  '"analgesicDoses": 1',
  '"caffeineMg": 135',
  '"comboMedCaffeine": true'
]);

if (!html.includes('Number(choice.analgesicDoses)')) {
  throw new Error('analgesicDoses 수량 집계 로직이 없음');
}

const recordFnMatch = html.match(/function applyChoiceRecords\(choice\)\{([\s\S]*?)\n\}/);
if (!recordFnMatch) throw new Error('applyChoiceRecords 함수를 찾을 수 없음');
const G = {};
const applyChoiceRecords = new Function('G', 'recordSleep', 'choice', recordFnMatch[1]);
applyChoiceRecords(G, () => {}, {
  analgesicDoses: 2,
  fastingMed: true,
  comboMedCaffeine: true
});
if (G.analgesicCount !== 2 || G.fastingMedCount !== 1 || G.comboCount !== 1) {
  throw new Error(`집계 결과 불일치: ${JSON.stringify(G)}`);
}

console.log('choice record regression checks passed');
