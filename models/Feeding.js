const mongoose = require('mongoose');

const FeedingSchema = mongoose.Schema({
	feedingTime: {
		type: String,
		required: true,
	},
	// what they were fed: Bread, rice
	food: {
		type: String,
		required: true,
	},
	// type of food: Grains, veggies
	foodType: {
		type: String,
		required: true,
	},
	foodAmount: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	numberOfDucks: {
		type: String,
		required: true,
	},
	// flag for a timer function to feed ducks automatically
	repeatFeeding: {
		type: Boolean,
		required: true,
	},
});

module.exports = mongoose.model('Feeding', FeedingSchema);
