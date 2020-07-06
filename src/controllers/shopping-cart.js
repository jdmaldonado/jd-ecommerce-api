'use strict';

const { handleSucess, handleError } = require('../utils/responses')
const CartProduct = require('../models/CartProduct')

const mapToCartProduct = (product) => {
	return {
		_id: product._id,
		product: product,
		cant: product['cant']
	}
}

const createCartProduct = async (product) => {
	const newCartProduct = new CartProduct({ ...product, cant: 1 })
	return await newCartProduct.save();
}

const getCartProductById = async (productId) => {
	return new Promise((resolve, reject) => {
		CartProduct.findById(productId, (err, product) => {
			if (err) { reject(err) }
			resolve(product);
		})
	})
}

const updateCartProduct = async ({ _id, cant }) => {
	return new Promise((resolve, reject) => {
		CartProduct.findByIdAndUpdate(_id, { cant }, { new: true }, (err, product) => {
			if (err) { reject(err) }
			resolve(product);
		})
	})
}

const removeCartProduct = async ({ _id, product }) => {
	return new Promise((resolve, reject) => {
		CartProduct.findByIdAndRemove({ _id }, (err, product) => {
			if (err) { reject(err) }
			resolve(product);
		})
	})
}

const get = async (req, res) => {
	CartProduct.find({}, (err, products) => {
		if (err) { handleError(res, err) }
		const cartProducts = products.map((product) => mapToCartProduct(product))
		handleSucess(res, cartProducts);
	})
}

const addProduct = async (req, res) => {
	try {
		let { product } = req.body;

		const currentProduct = await getCartProductById(product._id);
		let result;
		if (currentProduct) {
			console.log('Cant Product added');
			currentProduct.cant += 1;
			result = await updateCartProduct(currentProduct);
		} else {
			console.log('New Product');
			result = await createCartProduct(product);
		}
		return handleSucess(res, mapToCartProduct(result));
	} catch (error) {
		return handleError(res, error)
	}
}

const removeProduct = async (req, res) => {
	try {
		let { productId } = req.params;

		const currentProduct = await getCartProductById(productId);
		let result;
		if (currentProduct.cant > 0) {
			currentProduct.cant -= 1;
			result = await updateCartProduct(currentProduct);
		} else {
			result = currentProduct;
		}
		return handleSucess(res, mapToCartProduct(result));
	} catch (error) {
		return handleError(res, error)
	}
}

module.exports = {
	addProduct,
	removeProduct,
	get
}