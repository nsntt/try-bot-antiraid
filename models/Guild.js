const { Schema, model } = require("mongoose");

const guildSchema = new Schema({
    guildId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    prefix: {
        type: String,
        default: "$"
    }
})

module.exports = model('Guild', guildSchema);