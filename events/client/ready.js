const { ActivityType } = require("discord.js")

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
        })
    }
}