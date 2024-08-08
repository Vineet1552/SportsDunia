// SportsModels.js

const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now       
    }
});

const sportsSchema = new mongoose.Schema({
    sportName: {
        type: String,
        required: true
    },
    teams: [teamSchema]
});

const Sports = mongoose.model('Sports', sportsSchema);
module.exports = Sports;
