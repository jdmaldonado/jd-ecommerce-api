'use strict';

const { handleSucess, handleError } = require('../utils/responses')
const CartProduct = require('../models/CartProduct')

const get = async (req, res) => {
	CartProduct.find({}, (err, products) => {
    if (err) { handleError(res, err) }
		handleSucess(res, products);
	})
}

const addProduct = async (req, res) => {
  const { product } = req.body;
  handleSucess(res, product);
}

module.exports = {
  addProduct,
  get
}