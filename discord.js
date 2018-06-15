const Discord = require('discord.js');
const client = new discord.Client();
const request = require('request');


client.on('ready', () => {
	console.log("WEB PAGE Discord Bot Online.");
});

client.on('message', message =>{
	if(message.content === 'ping'){
		message.reply('pong');
	}
});

const options = {
	url: 'IP ADDRESS OR URL';
	method: 'GET'
};


setInterval(()=>{
	request(options, function(err, response, body){
		console.log("Getting status...");
		if(err && response.statusCode != 200){
			const embed = new Discord.RichEmbed();
			const copyr = '© WebPage Status 2017';

			embed.setTitle('WebPage Status');
			embed.setColor([255, 0, 0]);
			embed.addField('Status', 'Offline!');
			embed.setTimeStamp();
			embed.setFooter(copyr);
			client.channels.get('CHANNEL ID TO SEND MESSAGE TO').sendEmbed(embed);
		}
	});
}, 60000);


client.login('DISCORD LOGIN API KEY');