const { EmbedBuilder } = require("discord.js");
module.exports = {
    error: (message, err) => {
        message.channel.send({
            embeds:[new EmbedBuilder().setDescription(`${err}`).setColor('Red').setFooter({ "text": "discord.gg/nix" })]
        }).then(m => {
            setTimeout(() => {
                m.delete().catch(e => {});
            }, 5000);
        });
    },
    success: (message, succ) => {
        message.channel.send({
            embeds: [new EmbedBuilder().setDescription(`${succ}`).setColor('Green').setFooter({ "text": "discord.gg/nix" })]
        })
    }
}

