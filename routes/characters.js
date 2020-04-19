const express = require('express');
const router = express.Router();
const Character = require('./../models/Character');

// Get all Characters
router.get('/', async (req, res) => {
	try {
		res.json(await Character.find());
	} catch (err) {
		res.json(err);
	}
});

// Get Character for ID
router.get('/:characterId', async (req, res) => {
	try {
		console.log(req.params.characterId);
		res.json(await Character.findById(req.params.characterId));
	} catch (err) {
		res.json(err);
	}
});

// Delete a Character
router.delete('/:characterId', async (req, res) => {
	try {
		res.json(await Character.remove({ _id: req.params.characterId }));
	} catch (err) {
		res.json(err);
	}
});

// Update a Character

router.patch('/:characterId', async (req, res) => {
	try {
		res.json(
			await Character.updateOne(
				{ _id: req.params.characterId },
				{
					$set: {
						name: req.body.name,
					},
				}
			)
		);
	} catch (err) {
		res.json(err);
	}
});

// Create a Character
router.post('/', async (req, res) => {
	const character = new Character({
		name: req.body.name,
		class: req.body.class,
		species: req.body.species,
	});
	try {
		const savedCharacter = await character.save();
		res.json(savedCharacter);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
