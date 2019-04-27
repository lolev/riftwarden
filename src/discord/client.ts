import { CommandClient } from 'eris'
import Config from '../config'
import log from '../logger'

export default class DiscordClient {
    public readonly bot = new CommandClient(Config.DISCORD_BOT_TOKEN, { maxShards: 'auto' })

    public async connect() {
        await this.bot.connect()

        this.bot.on('ready', () => {
            log('Connected to discord as %s (%s)', this.bot.user.username, this.bot.user.id)
        })
    }
}
