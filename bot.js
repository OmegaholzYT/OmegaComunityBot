const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '+thistoken') {
    	message.reply('Nice Try!');
  	}

    if (message.content === '+ping' {
    	message.reply('Pong');
  	}

    if (message.content === '+help') {
    	message.reply('My Commands are: \n\
                      +yt \n\
                      +ping \n\
                      +thistoken');
  	}

    if (message.content === '+yt') {
    	message.reply('https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw');
  	}
});

client.login(process.env.BOT_TOKEN);
