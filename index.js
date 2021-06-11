const fs = require('fs');
const discord = require('discord.js');
const { prefix, bot_token } = require('./config.json');

const client = new discord.Client();
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (err) {
        console.error(err);
        message.reply('there was an error trying to execute that command!', err);
    }

});

client.login(bot_token);