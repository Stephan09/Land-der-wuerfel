const Discord = require('discord.js');



const client = new Discord.Client();
const prefix = '!';


client.on('ready', () => {

    client.user.setStatus('available')

    client.user.setPresence({

        game: {

            name: 'Creativerse',

            type: "PLAYING",

        }

    });

});    



	

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
});


client.on('message', message => {

    if (message.content === 'hallo') {

       message.channel.send('Hallo ;)');

       }

});



client.on('message', message => {
    if (message.content === prefix + 'steam') {
       message.channel.send('Hier ist der link zum Creativerse Steam Forum: https://steamcommunity.com/app/280790/ ;)');
       }
}); 




client.on('message', message => {
    if (message.content === prefix + 'twitch') {
       message.channel.send('Hier ist der Link zum Creativerse Twitch channel: https://www.twitch.tv/playfulcorp ;)');
       }
}); 


client.on('message', message => {
    if (message.content === prefix + 'youtube') {
       message.channel.send('Hier ist der link zum Land der würfel-Land of cubes youtube channel: https://www.youtube.com/channel/UCqwdPlnNVnfv7VhyHhJWo6g ;)');
       }
}); 


client.on('message', message => {
    if (message.content === prefix + 'Steam-group') {
       message.channel.send('Hier ist der link zur Land der würfel-Land of cubes Steam Gruppe: https://steamcommunity.com/groups/landofcubes;)');
       }
}); 



client.on('message', message => {
    if (message.content === prefix + 'twitter') {
       message.channel.send('Hier ist der link zum Creativerse Twitter channel: https://twitter.com/creativersegame ;)');
       }
}); 



client.on('message', message => {
	if(message.content.toLowerCase() === '<@510821408339787830>') { if(message.author.bot) { return; }
	         var embed = new Discord.RichEmbed()
			 .addField('Hallo, ich bin der Land der Wuerfel - Land of Cubes Discord bot', ' mache "!hilfe" für meine kommandos.  Programiert von Stephan. Mehr kommandos kommen später!')
			 .setColor('GREEN')
			message.channel.sendEmbed(embed);
	}
});




client.on('guildMemberAdd', member => {
		const channel = member.guild.channels.find(ch => ch.name === 'general');
        if (!channel) return;
		channel.send(`${member} Willkommen bei den land der wuerfel discord Server :grinning:`);
});



client.on('message', message => {
	if(message.content.toLowerCase() === prefix + 'hilfe'){if(message.author.bot) { return; }
	         var embed = new Discord.RichEmbed()
			 .addField('hier sind meine kommandos: ',  '"!steam" link zum forum - "!twitch" link zu Creativerse Twitch channel - "!twitter" link zum creativerse twitter channel - "!youtube" link zum land der würfel-land of cubes youtube channel - "!steam-group" Link zur Steam Land der würfel-Land of cubes Gruppe.  Weiter kommandos flogen!') 
			 .setColor('GREEN')
			message.channel.sendEmbed(embed);
	}
});



// THIS  MUST  BE  THIS  WAY




client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot


