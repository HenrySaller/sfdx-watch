const { Command, flags } = require('@oclif/command');
const { watch } = require('./../');

class WatchCommand extends Command {
  async run() {
    const { flags } = this.parse(WatchCommand);
    await watch({ flags, logEnabled: true });
  }
}

WatchCommand.description = 'watch for changes';

WatchCommand.flags = {
  username: flags.string({char: 'u', description: 'a username or alias for the target org'}),
}

module.exports = WatchCommand;
