
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("<@297735447545643008> will suck dick for 100 billion!")
}

module.exports.config = {
    name: "juice",
    description: "",
    usage: "-juice",
    accessableby: "Members",
    aliases: []
}