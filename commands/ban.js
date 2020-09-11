const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("BAN_MEMBERS"))
        if (message.members.mentions.first()) {
            try {
                message.members.mentions.first().ban();
            } catch {
                message.reply("I do not have permissions to ban" + msg.members.mentions.first());
        
        }
    }
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}