const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map(match => match[1])
  .filter(script => script.trim());

if (!scripts.length) throw new Error('검사할 인라인 스크립트가 없음');
for (const script of scripts) new Function(script);

console.log(`${scripts.length} inline scripts parsed successfully`);
