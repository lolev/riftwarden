import log from './logger'
import DiscordClient from './discord/client'

const start = async () => {
    log('Starting Rift Warden...')

    const discord = new DiscordClient()
    await discord.connect()

    log('Rift Warden is running!')

    discord.bot.registerCommand('ping', msg => discord.bot.createMessage(msg.channel.id, 'pong'))
}

start()
