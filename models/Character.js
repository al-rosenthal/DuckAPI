const mongoose = require('mongoose');

const FeedingSchema = mongoose.Schema({
	feedingTime: {
		type: String,
		required: true,
	},
	food: {
		type: String,
		required: true,
	},
	foodAmount: {
		type: String,
		required: true,
	},
	where: {
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
