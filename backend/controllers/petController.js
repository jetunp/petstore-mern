const asyncHandler = require('express-async-handler');
const Pet = require('../models/petModel');
const mongoose = require('mongoose');

// @desc Get All Pets
// @route GET /pet
// @access public
const getPets = asyncHandler(async (req, res) => {
	const pets = await Pet.find();
	res.status(200).json(pets);
});

// @desc Get Pets by given Id
// @route GET /pet/{petId}
// @access public
const getPetsById = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Get particular pet by Id' });
});

// @desc set Pet
// @route POST /pet
// @access public
const setPet = asyncHandler(async (req, res) => {
	// if (!req.body.petId) {
	// 	res.status(400);
	// 	throw new Error('Please add a required field');
	// }

	const pet = await Pet.create({
		petId: req.body._id,
		category: req.body.category,
		name: req.body.name,
		photoUrls: req.body.photoUrls,
		tags: req.body.tags,
		status: req.body.status,
	});
	res.status(200).json(pet);
});

// @desc Update Pet by given Id
// @route PUT /pet/{petId}
// @access public
const updatePet = asyncHandler(async (req, res) => {
	const { petId } = req.params;

	// // Validate if petId is a valid ObjectId
	if (!mongoose.Types.ObjectId.isValid(petId)) {
		return res.status(400).json({ error: 'Invalid petId provided' });
	}

	//get the pet
	const pet = await Pet.findById(petId);

	if (!pet) {
		res.status(404);
		throw new Error('Pet not found');
	}

	const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body, {
		new: true,
	});
	res.status(200).json(updatedPet);
});

// @desc Delete Pet by given Id
// @route DELETE /pet/{petId}
// @access public
const deletePet = asyncHandler(async (req, res) => {
	const { petId } = req.params;
	//get the pet
	const pet = await Pet.findById(petId);

	if (!pet) {
		res.status(404);
		throw new Error('Pet not found');
	}

	await Pet.deleteOne(pet);

	res.status(200).json({ petId: req.params._id });
});
module.exports = {
	getPets,
	getPetsById,
	updatePet,
	setPet,
	deletePet,
};
