const Blacklist = require("../models/Blacklist");
const Guild = require("../models/Guild");

module.exports = {
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
    }
}