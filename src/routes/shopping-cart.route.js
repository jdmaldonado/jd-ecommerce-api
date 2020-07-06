const express = require('express');
const router = express.Router();
/** Services */
const ShoppingCartController = require('../controllers/shopping-cart');

router.route('/')
	.get(ShoppingCartController.get)
	.post(ShoppingCartController.addProduct);

module.exports = router;