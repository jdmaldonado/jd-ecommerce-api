'use strict';

const { handleSucess, handleError } = require('../utils/responses')
const Product = require('../models/Product')

const get = async (req, res) => {
	Product.find({}, (err, products) => {
    if (err) { handleError(res, err) }
		handleSucess(res, products);
	})
}

module.exports = {
	get
}