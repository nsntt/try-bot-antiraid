const { Schema, model } = require("mongoose");

const antiRaidSchema = new Schema({
    guildId: {
        type: String,
        unique: true,
        required: true
    },
    punishment: {
        type: String,
        default: "Kick"
    },
    webhooks: {
        maxMessages: {
            type: Number,
            default: 3
        },
        actived: {
            type: Boolean,
            default: true
        }
    },
    channels: {
        maxCreate: {
            type: Number,
            default: 3
        },
        maxDelete: {
            type: Number,
            default: 2
        },
        actived: {
            type: Boolean,
            default: true
        }
    },
    roles: {
        maxCreate: {
            type: Number,
            default: 6
            
        },
        maxDelete: {
            type: Number,
            default: 3
        },
        actived: {
            type: Boolean,
            default: true
        }
    },
    members: {
        maxKick: {
            type: Number,
            default: 3
        },
        maxBan: {
            type: Number,
            default: 1
        },
        actived: {
            type: Boolean,
            default: true
        }
    },
    bots: {
        onlyVerified: {
            type: Boolean,
            default: false
        },
        actived: {
            type: Boolean,
            default: true
        }
    }
});

module.exports = model('Antiraid', antiRaidSchema);