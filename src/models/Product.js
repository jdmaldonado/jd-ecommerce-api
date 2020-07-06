const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
})

module.exports = model('Product', productSchema)