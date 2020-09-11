const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
       const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Spotify Help')
        .setAuthor('FullSendBud')
        .setDescription('All the commands for the server')
        .setThumbnail('https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif')
        .addFields(
            { name: '-spotify', value: 'Gives Seths paypal for luna' },
            { name: '-spotifyfullsend', value: 'Gives Seths cashapp for luna' },
            { name: '-spotifysite', value: 'Gives Seths paypal for luna' },
            { name: '-thankyou', value: 'Gives the review command' },
        )
        .setImage('https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif')
        .setTimestamp()
        .setFooter('Help 3/6', 'https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif');
        message.channel.send(exampleEmbed);
    }

module.exports.config = {
    name: "spotifyhelp",
    description: "Help Command for spotify",
    usage: "-spotifyhelp",
    accessableby: "Members",
    aliases: []
}