const express = require('express');
const router = express.Router();
const Feeding = require('../models/Feeding');

// Feed the ducks
router.post('/', async (req, res) => {
	const feed = new Feeding({
		feedingTime: req.body.feedingTime,
		food: req.body.food,
		foodType: req.body.foodType,
		foodAmount: req.body.foodAmount,
		location: req.body.location,
		numberOfDucks: req.body.numberOfDucks,
		repeatFeeding: req.body.repeatFeeding,
	});
	try {
		const savedFeed = await feed.save();
		res.json(savedFeed);
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

module.exports = router;
