const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("<@419649827907829760> Wont suck dick for 100 Billion!")
}

module.exports.config = {
    name: "bored",
    description: "",
    usage: "-bored",
    accessableby: "Members",
    aliases: []
}