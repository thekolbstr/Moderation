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
            { name: '-bored', value: 'Makes fun of bored' },
            { name: '-barnical', value: 'Makes fun of barnical' },
            { name: '-butter', value: 'Makes fun of butter' },
            { name: '-seth', value: 'Makes fun of seth' },
        )
        .addField('-fuckyou', 'Put it in see what it does')
        .addField('-eatspussy', 'Put it in see what it does')
        .addField('-fuck', 'Put it in see what it does')
        .addField('-kaos', 'Makes fun of kaos')
        .addField('-juice', 'Makes fun of juice')
        .addField('-help', 'Returns to the help section')
        .setImage('https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif')
        .setTimestamp()
        .setFooter('Help 6/6', 'https://cdn.discordapp.com/attachments/740392842823860267/753341157425283232/PR_gif.gif');
        message.channel.send(exampleEmbed);
    }
module.exports.config = {
    name: "funhelp",
    description: "Help Command",
    usage: "-funhelp",
    accessableby: "Members",
    aliases: []
}