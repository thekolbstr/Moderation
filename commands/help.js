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
            { name: '-resellhelp', value: 'Gives all the commands for reselling menus' },
            { name: '-spotifyhelp', value: 'Gives all the commands for reselling spotify' },
            { name: '-moderationhelp', value: 'Gives all the commands for moderation' },
            { name: '-funhelp', value: 'Gives all the commands for fun' },
        )
        .addField('-tickethelp', 'Gives the commands for the ticket bot', true)
        .setImage('https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif')
        .setTimestamp()
        .setFooter('Help 1/6', 'https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif');
        message.channel.send(exampleEmbed);
    }

module.exports.config = {
    name: "help",
    description: "Help Command",
    usage: "-help",
    accessableby: "Members",
    aliases: []
}