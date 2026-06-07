import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());

function stripModuleSyntax(source) {
  return source
    .replace(/^import\s+[\s\S]*?from\s+["'][^"']+["'];\n/gm, "")
    .replace(/^export\s+\{[^}]+\};\n?/gm, "")
    .replace(/\bexport\s+/g, "");
}

const files = [
  resolve(root, "src/extra-players.js"),
  resolve(root, "src/generated-world-cup-data.js"),
  resolve(root, "src/data.js"),
  resolve(root, "src/game.js"),
  resolve(root, "src/main.js"),
];

const contents = await Promise.all(files.map((file) => readFile(file, "utf8")));
const bundled = contents.map(stripModuleSyntax).join("\n\n");
const output = `(() => {\n${bundled}\n})();\n`;

await writeFile(resolve(root, "app.js"), output);
console.log("Built app.js");
