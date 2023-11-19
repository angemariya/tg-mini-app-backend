import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6891827283:AAFSwg2TTesKCZmuzx6U1JFgUkGLzv0PcYE'
const webAppUrl = 'https://angular-tg-app-4c57f.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply('Hello! Welcome to the bot. Press the button to continue', Markup.keyboard([
        Markup.button.webApp(
            'Send message',
            webAppUrl + "/feedback"
        )
    ]))
})
    
bot.on(message('web_app_data'), async (ctx) => {
    const { data } = ctx.webAppData.data.json();
    ctx.reply('Thank you for your feedback')
}
)

bot.launch()