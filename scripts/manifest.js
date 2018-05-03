const { Command } = require('@oclif/command');
const { Plugin } = require('@oclif/config');
const { unlinkSync, writeFileSync } = require('fs');
const { resolve, join } = require('path');

async function manifest() {
  try { unlinkSync('.oclif.manifest.json') } catch {}
  let plugin = new Plugin({
    root: resolve(__dirname),
    type: 'core',
    ignoreManifest: true,
    errorOnManifestCreate: true
  })

  await plugin.load();

  const file = join(plugin.root, '.oclif.manifest.json');

  writeFileSync(file, JSON.stringify(plugin.manifest));
}

manifest();
