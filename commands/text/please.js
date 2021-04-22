module.exports = {
    desc: "the magic word",
    run: async function(Discord, message, client, quick) {
        message.delete()

        const args = message.content.substring(quick.getSetting('Prefix').length).split(' ')
        const command = args.shift()

        message.channel.send(
            quick.embed(
                `Please?`,
                `Pwitty pwease? I weally want this. __U__w__U__`
            )
        )
    }
}