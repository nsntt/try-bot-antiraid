const Discord = require("discord.js");
const client = new Discord.Client({ intents: [3276799], ws: { properties: { browser: "Discord iOS" } } });
const { config } = require("dotenv");

module.exports = client;
config();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

require("./database");

['eventHandler', 'commandHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN)