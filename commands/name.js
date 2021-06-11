module.exports = {
    name: 'botname',
    description: '',
    execute(message, args) {
        message.channel.send(message);

        // if (msg.author.bot || msg.channel.type == 'group') return;
        // if (msg.author.id === ownerID) {
        //     console.log(msg.guild.members);
            // msg.guild.members.get(client.user.id).setNickname('kvebot');
        // }
        console.log('hi', 'bye')
    }
}