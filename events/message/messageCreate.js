const { Client, Message, EmbedBuilder, Collection} = require("discord.js");
const Guild = require("../../models/Guild");
const Blacklist = require("../../models/Blacklist");
const { error } = require("../../utils/error");

module.exports = {
    name: "messageCreate",
    /**
     * 
     * @param {Message} message 
     * @param {Client} client 
     */
    async execute(message, client, Discord) {
        if(!message.guild) return;
        if(message.author.bot) return;
        
        const guild = await Guild.findOne({ guildId: message.guild.id });
        const prefix = guild.prefix;
        const blacklist = await Blacklist.findOne({ userId: message.author.id });
        
        if(!message.content.startsWith(prefix)) return;
        if(blacklist) return;

        let [cmdname, ...args] = message.content.slice(prefix.length).trim().split(/\s+/);
        if(cmdname === "") return;
        const cmd = client.commands.get(cmdname.toLowerCase() || client.commands.find(cmd1 => cmd1.aliases && cmd1.aliases.includes(cmdname.toLowerCase())));
        if(!cmd) return await error(message, 'Ese comando no existe!');

        const { cooldowns } = client;
        if(!cooldowns.has(cmd.name)) {
            cooldowns.set(cmd.name, new Collection())
        }

        const now = Date.now();
        const timestamps = cooldowns.get(cmd.name);
        const amount = (command.cooldown || 1) * 1000;

        if(timestamps.has(message.author.id)) {
            const time = timestamps.get(message.author.id) + amount;
            if(now < time) {
                const left = (time - now) / 1000
                return await error(message, `Tengo que enfriar mis sistemas, espera \`${left.toFixed(1)}s\`!`);
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), amount);

        try {
            cmd.execute(message, args, client, prefix)
        } catch {
            return await error(message, 'Un error inesperado ocurrio')
        }
    }
}