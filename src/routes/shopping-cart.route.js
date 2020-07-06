const express = require('express');
const router = express.Router();
/** Services */
const ShoppingCartController = require('../controllers/shopping-cart');
/** middleware */
const { validateAuthToken } = require('../middlewares/auth.middleware');

router.route('/')
	.get(validateAuthToken, ShoppingCartController.get)
	.post(validateAuthToken, ShoppingCartController.addProduct);

router.route('/:productId')
	.delete(validateAuthToken, ShoppingCartController.removeProduct)


module.exports = router;