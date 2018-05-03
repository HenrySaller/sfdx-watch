const { Command } = require('@oclif/command');
const { watch } = require('./../');

class WatchCommand extends Command {
  async run() {
    await watch({ logEnabled: true });
  }
}

WatchCommand.description = 'watch for changes';

module.exports = WatchCommand;
