const { Schema, model } = require('mongoose');

const cartProductSchema = new Schema({
	_id: String,
	name: String,
	description: String,
	image: String,
	price: Number,
	category: String,
	cant: Number,
}, { _id: false })

module.exports = model('CartProduct', cartProductSchema);