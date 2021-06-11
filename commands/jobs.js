const { Message } = require("discord.js")

module.exports = {
    name: '5pls',
    description: '',
    execute(message, args) {
        message.channel.send(message.channel);
    }
}