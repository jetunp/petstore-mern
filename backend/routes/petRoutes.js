const express = require('express');
const router = express.Router();
const {
	getPets,
	getPetsById,
	setPet,
	updatePet,
	deletePet,
} = require('../controllers/petController');

//get all pets
router.get('/', getPets);

//get by pet ID
router.get('/:petId', getPetsById);

//create new pet
router.post('/', setPet);

//update the pet with the Id
router.put('/:petId', updatePet);

//delete the pet with the Id
router.delete('/:petId', deletePet);

module.exports = router;
