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
		feed.save(function (err, product) {
			if (err) {
				console.log(err);
			}
			res.send(product);
		});
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

router.get('/', (req, res) => {
	res.send('No connection but the route is working');
});

module.exports = router;
