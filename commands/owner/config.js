const { EmbedBuilder, Client, Message } = require("discord.js");
const { err, check, cat } = require("../../utils/emojis");
const { error, success } = require("../../utils/msgs");

const Guild = require("../../models/Guild");
const Antiraid = require("../../models/Antiraid");

module.exports = {
    name: "config",
    cooldown: 3,
    aliases: ["configuracion", "panel"],
    usage: "<prefix>config",
    /**
     * 
     * @param {Message} message 
     * @param {[]} args 
     * @param {Client} client 
     * @param {String} prefix 
     */
    async execute(message, args, client, prefix) {
        if(!message.member.permissions.has("Administrator") && !message.member.roles.highest > message.guild.members.me.roles.highest || message.guild.ownerId !== message.author.id) return await error(message, `${err} | No tienes permisos para ejecutar este comando`) 
        const config = await Antiraid.findOne({ guildId: message.guild.id });
        console.log(config)
    }
}