const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("KICK_MEMBERS"))
        if (message.members.mentions.first()) {
            try {
                message.members.mentions.first().kick();
            } catch {
                message.reply("I do not have permissions to kick" + msg.members.mentions.first());
        } 
    }
}


module.exports.config = {
    name: "kick",
    description: "kicks a Users",
    usage: "-kick",
    accessableby: "Admins",
    aliases: []
}