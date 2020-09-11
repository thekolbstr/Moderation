const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    
    message.channel.send("https://spotifyupgraders.com/")
}

module.exports.config = {
    name: "spotifysite",
    description: "",
    usage: "-spotifysite",
    accessableby: "Members",
    aliases: ['Spotifysite']
}