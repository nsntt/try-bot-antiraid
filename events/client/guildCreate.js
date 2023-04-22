const { isBlacklist, addGuild, configAntiraid } = require("../../utils/checkers");

module.exports = {
    name: "guildCreate",
    async execute(guild, client) {
        // revisa si el servidor esta denegado en la base de datos
        await isBlacklist(guild);
        await addGuild(guild);
        await configAntiraid(guild);
    }
}