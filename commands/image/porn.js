module.exports = {
    desc: ";)",
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
                .setAuthor(random.title,'https://i.ytimg.com/vi/BweV0r7sRGQ/hqdefault.jpg')
                .setThumbnail('https://img.haikudeck.com/mg/d8f8dea4f8_1448212350823.jpg')
                .setFooter(`Doom selfbot`)
                .setTimestamp()
                .setImage(random.preview)
                
            await m.edit(embed)
        })
    }
}