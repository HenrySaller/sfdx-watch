const { Command } = require('@oclif/command');
const { watch } = require('./../');

class WatchCommand extends Command {
  async run() {
    const logEnabled = true;
    watch(logEnabled);
  }
}

WatchCommand.description = 'watch for changes';

module.exports = WatchCommand;
