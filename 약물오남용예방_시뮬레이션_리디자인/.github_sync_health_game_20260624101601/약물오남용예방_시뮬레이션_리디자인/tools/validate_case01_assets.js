const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const data = fs.readFileSync(path.join(root, "assets", "data", "case01_game_data.js"), "utf8");

const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (!inlineScripts.length) {
  throw new Error("No inline script found in index.html");
}

new Function(inlineScripts.at(-1)[1]);
new Function(data);

const htmlRefs = [...html.matchAll(/src="(\.\/assets\/[^"]+)"/g)].map((match) => match[1]);
const dataRefs = [...data.matchAll(/"(\.\/assets\/[^"]+)"/g)].map((match) => match[1]);
const missing = [...new Set([...htmlRefs, ...dataRefs])].filter((assetPath) => {
  return !fs.existsSync(path.join(root, assetPath));
});

console.log("inline script ok");
console.log(`asset refs ${htmlRefs.length + dataRefs.length}`);
console.log(`missing ${missing.length}`);

if (missing.length) {
  console.log(missing.join("\n"));
  process.exit(1);
}
