const { Schema, model } = require("mongoose");

const blacklistSchema = new Schema({
    userId: {
        type: String,
    }
});

module.exports = model('Blacklist', blacklistSchema)