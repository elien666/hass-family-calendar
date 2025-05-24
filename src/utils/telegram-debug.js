import { Bot } from 'grammy'

const bot = new Bot('')
const chatId = '' // Björn

const DEBUG = true

const telegramDebug= (name, message) => {
    if (DEBUG) {
        console.log('Sending debug message ', message)
        const date = new Date().toLocaleString('de-DE', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        bot.api.sendMessage(chatId, `[${date}] DEBUG - ${name}] - ${message}`)
    }
}

export default telegramDebug