const { Schema, model } = require('mongoose');

const cartProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  cant: Number,
})

module.exports = model('CartProduct', cartProductSchema);