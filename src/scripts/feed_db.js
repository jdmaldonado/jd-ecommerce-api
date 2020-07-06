
const Product = require('../models/Product');

const getRamdomCategory = () => {
	const categories = ['category_1', 'category_2', 'category_3', 'category_4'];
	const index = Math.floor(Math.random() * categories.length)
	return categories[index];
}

let products = Array.from(Array(50), (_, i) => ({
	id: `product_${i+1}`,
	name: `product name ${i+1}`,
	image: `https://picsum.photos/400?image=${Math.floor(Math.random()*1000)}`,
	description: `product description ${i+1}`,
	price: Math.floor(Math.random() * 100000) + 10000,
	category: getRamdomCategory()
}))

Product.insertMany(products)
	.then((docs) => console.log(`docs`, docs))
	.catch((err) => console.log(`err`, err));