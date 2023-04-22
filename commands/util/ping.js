module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Mira la latencia del bot",
    async execute(message, args, client, prefix) {
        message.channel.send({ content: `La latencia del bot es de **${client.ws.ping}ms**` })
    }
}