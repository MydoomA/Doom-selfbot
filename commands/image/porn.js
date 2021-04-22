module.exports = {
    desc: "gets the ping of the selfbot",
    run: async function(Discord, message, client, quick) {
        message.delete()

        const args = message.content.substring(quick.getSetting('Prefix').length).split(' ')
        const command = args.shift()

        const {Attachment} = require('discord.js');
        const PornHub = require('pornhub.js')

        const pornhub = new PornHub()

        const m = await message.channel.send('Searching...')
        
        pornhub.search('Video', args.join(' ')).then(async function (res) {
            const random = await res.data[Math.floor(Math.random() * res.data.length)]

            const embed = new Discord.RichEmbed()
                .setColor(quick.getSetting('Color'))
                .setAuthor(random.title,'https://cdn.discordapp.com/attachments/821616662917677067/822219803578073169/ezgif.com-resize.gif')
                .setThumbnail('https://raw.githubusercontent.com/pionxzh/pornhub.js/HEAD/images/logo.png')
                .setFooter(`Vapin' Cat Selfbot.`)
                .setTimestamp()
                .setImage(random.preview)
                
            await m.edit(embed)
        })
    }
}