import { readFileSync, writeFileSync } from 'node:fs';

const version = process.argv[2] || new Date().toISOString().replace(/[-:.]/g, '').replace('Z', '');
const replacements = [
  ['index.html', [
    [/(\.\/src\/styles\.css\?v=)[^"']+/, `$1${version}`],
    [/(\.\/src\/main\.js\?v=)[^"']+/, `$1${version}`]
  ]],
  ['src/main.js', [
    [/(\.\/sw\.js\?v=)[^']+/, `$1${version}`]
  ]],
  ['sw.js', [
    [/(const CACHE_NAME = 'lira-static-)[^']+/, `$1${version}`]
  ]]
];

replacements.forEach(([file, rules]) => {
  const source = readFileSync(file, 'utf8');
  const updated = rules.reduce((contents, [pattern, replacement]) => contents.replace(pattern, replacement), source);
  if (source === updated) throw new Error(`No se pudo actualizar la versión en ${file}.`);
  writeFileSync(file, updated);
});

writeFileSync('portal-version.txt', `la-isla-de-lira-${version}\n`);
console.log(`Versión de assets: ${version}`);
