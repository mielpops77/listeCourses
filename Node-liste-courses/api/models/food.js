const mongoose = require('mongoose');

const alimentSchema = new mongoose.Schema({
	nom: String,
	image: String,
	createdOn: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Food', alimentSchema);



