const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Help') {
    	message.reply('Meine Commands sind
Ping, Hi, Hallo und YouTube :)
Mehr Commands werden Kommen! -LG OmegaholzYT');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'Hi') {
    	message.reply('Guten Tag!');
  	}
});

client.on('message', message => {
    if (message.content === 'Hallo') {
    	message.reply('Guten Tag!');
  	}
});

client.on('message', message => {
    if (message.content === 'YouTube') {
    	message.reply('https://m.youtube.com/channel/UCTJQkBj3dhkgA1TXnpZGkhw');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
