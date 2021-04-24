module.exports = {
    desc: "advertizes scorpion admin (best PL admin script)",
    run: async function(Discord, message, client, quick) {
        message.delete()

        const args = message.content.substring(quick.getSetting('Prefix').length).split(' ')
        const command = args.shift()

        const embed = new Discord.RichEmbed()
            .setTitle("Doom selfbot")
            .setAuthor("Mydoom","https://i.ytimg.com/vi/BweV0r7sRGQ/hqdefault.jpg")
            .setColor(quick.color)
            .setDescription("Doom selfbot")
            .setThumbnail("https://i.ytimg.com/vi/BweV0r7sRGQ/hqdefault.jpg");


        message.channel.send(embed)
    }
}