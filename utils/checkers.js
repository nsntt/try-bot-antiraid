const Blacklist = require("../models/Blacklist");
const Guild = require("../models/Guild");
const Antiraid = require("../models/Antiraid");

module.exports = {
    // guild checkers
    isBlacklist: async (guild) => {
        const user = await Blacklist.findOne({ userId: guild.ownerId });
        if(user) {
            return guild.leave();
        }
    },
    addGuild: async (guild) => {
        const find = await Guild.findOne({ guildId: guild.id });
        if(!find) {
            const create = new Guild({
                guildId: guild.id,
                name: guild.name,
                prefix: "$"
            });
            await create.save();
        }
    },
    configAntiraid: async (guild) => {
        const find = await Antiraid.findOne({ guildId: guild.id });
        if(!find) {
            const create = new Antiraid({
                guildId: guild.id
            });
            await create.save();
        }
    },
    deleteCooldown: (client, cmd) => {
        const { cooldowns } = client;
        cooldowns.get(cmd)?.delete(message.author.id)
    }
}