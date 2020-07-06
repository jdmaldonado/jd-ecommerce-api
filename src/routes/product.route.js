const express = require('express');
const router = express.Router();
/** Services */
const ProductsController = require('../controllers/products');
/** middleware */
const { validateAuthToken } = require('../middlewares/auth.middleware');

router.route('/')
	.get(validateAuthToken, ProductsController.get);
	

module.exports = router;