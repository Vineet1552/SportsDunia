const express = require('express');
const router = express.Router();
const Sports = require('../Model/SportsModel');

router.post('/ScorePost', async (req, res) => {
    try {
        const { sportName, teams } = req.body;
        let sport = await Sports.findOne({ sportName: sportName });
        if (sport) {
            sport.teams.push(...teams);
            const updatedSport = await sport.save();
            res.status(200).json({ response: updatedSport });
        } else {
            const newSportsData = new Sports({
                sportName: sportName,
                teams: teams
            });

            const response = await newSportsData.save();
            res.status(200).json({ response });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/get', async (req, res) => {
    try {
        const response = await Sports.find({});
        // console.log(response);
        res.status(200).json({response});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

router.post('/getScores', async (req, res) => {
    try {
        const { sportName } = req.body;
        const sportsData = await Sports.findOne({ sportName: sportName });

        if (!sportsData) {
            return res.status(404).json({ message: "Sport not found" });
        }

        res.status(200).json(sportsData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
