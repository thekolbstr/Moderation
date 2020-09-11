
const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Please Send $10 to https://www.paypal.me/flameflorez. Make sure its through family and friends and not goods and service and send the receipt in this ticket!")
}

module.exports.config = {
    name: "spotify",
    description: "",
    usage: "-spotify",
    accessableby: "Members",
    aliases: ['Spotify']
}