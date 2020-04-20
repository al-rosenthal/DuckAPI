const express = require('express');
const router = express.Router();
const Feeding = require('../models/Feeding');

// Feed the ducks
router.post('/', async (req, res) => {
	console.log('Made it to request');
	const feed = new Feeding({
		feedingTime: req.body.feedingTime,
		food: req.body.food,
		foodType: req.body.foodType,
		foodAmount: req.body.foodAmount,
		location: req.body.location,
		numberOfDucks: req.body.numberOfDucks,
		repeatFeeding: req.body.repeatFeeding,
	});
	console.log('Built Object');
	try {
		feed.save((err, product) => {
			if (err) {
				console.log(err);
			}
			res.json(product);
		});
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

module.exports = router;
