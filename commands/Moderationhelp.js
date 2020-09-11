const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
       const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help')
        .setAuthor('FullSendBud')
        .setDescription('All the commands for the server')
        .setThumbnail('https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif')
        .addFields(
            { name: '-paypalluna', value: 'Gives Seths paypal for luna' },
            { name: '-cashappluna', value: 'Gives Seths cashapp for luna' },
            { name: '-venmoluna', value: 'Gives Seths paypal for luna' },
            { name: '-thankyou', value: 'Gives the review command' },
        )
        .addField('-', 'Some value here', true)
        .setImage('https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif')
        .setTimestamp()
        .setFooter('Help 1/_', 'https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif');
        message.channel.send(exampleEmbed);
    }

module.exports.config = {
    name: "resellhelp",
    description: "Help Command",
    usage: "-resellhelp",
    accessableby: "Members",
    aliases: []
}