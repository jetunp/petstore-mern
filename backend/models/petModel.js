const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
	petId: {
		type: Number,
	},
	category: {
		id: {
			type: Number,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	name: {
		type: String,
		required: true,
	},
	photoUrls: {
		type: [String],
		default: [],
	},
	tags: [
		{
			id: {
				type: Number,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
		},
	],
	status: {
		type: String,
		enum: ['available', 'pending', 'sold'],
		required: true,
	},
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
