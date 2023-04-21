const Guild = require("../../models/Guild");
const Blacklist = require("../../models/Blacklist");
const { isBlacklist, addGuild } = require("../../utils/checkers");

module.exports = {
    name: "guildCreate",
    async execute(guild, client) {
        // revisa si el servidor esta denegado en la base de datos
        await isBlacklist(guild);
        await addGuild(guild);
    }
}