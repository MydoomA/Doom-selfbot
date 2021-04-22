module.exports = {
    desc: "spams message",
    run: async function(Discord, message, client, quick) {
        message.delete()

        const args = message.content.substring(quick.getSetting('Prefix').length).split(' ')
        const command = args.shift()

        if (args[1] && parseInt(args[0],10)) {
            for(i=1;i<=(parseInt(args[0],10) || 8);i++) {
                message.channel.send(args.join(' ').substring(args[0].length+command.length-3))
            }
        }
    }
}