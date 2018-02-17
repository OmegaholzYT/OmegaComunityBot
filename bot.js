const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply('Guten Tag!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hallo') {
    msg.reply('Guten Tag!!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Moin') {
    msg.reply('Guten Tag!');
  }
});

client.login('process.env.BOT_TOKEN');
