const { EmbedBuilder, Client, Guild, Message } = require("discord.js");
const { err, check, cat } = require("../../utils/emojis");
const { error, success } = require("../../utils/msgs");

module.exports = {
    name: "purge",
    aliases: ["clear", "clean"],
    cooldown: 3,
    usage: "<prefix>purge [number]",
    /**
     * 
     * @param {Message} message 
     * @param {[]} args 
     * @param {Client} client 
     * @param {String} prefix 
     */
    async execute(message, args, client, prefix) {
        if(!message.member.permissions.has("ManageMessages")) return await error(message, 'No tienes permisos para ejecutar este comando');
        let cantidad = args[0];

        if(!cantidad) return await error(message, `${err} | No mencionaste la cantidad de mensajes para eliminar`);
        if(cantidad.length <= 0) return await error(message, `${err} | La cantidad no puede ser menor a 1`);
        if(cantidad.length > 100) return await error(message, `${err} | La cantidad no puede ser mayor a 100`);

        message.channel.bulkDelete(cantidad, true);
        await success(message, `${check} | Se han eliminado ${cantidad} mensajes en este canal`)
    }
}