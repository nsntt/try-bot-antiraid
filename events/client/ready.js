const { ActivityType } = require("discord.js");
const { isBlacklist, addGuild, configAntiraid } = require("../../utils/checkers");
const Guild = require("../../models/Guild");

module.exports = {
    name: "ready",
    async execute(client) {
        console.log("El bot esta encendido!")
        // colocar presencia del bot
        client.user.setPresence({
            activities: [
                {
                    name: "comandos con $",
                    type: ActivityType.Listening
                }
            ]
        });
    }
}