'use strict';
/** Connect to DB */
require('./services/db-connection');


const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

/** Routes */
const shoppingCartRouter = require('./routes/shopping-cart.route');
const productsRouter = require('./routes/product.route');

app.use(cors({ origin: true }));
app.use(express.json());

/** Routes config */
app.use('/products', productsRouter);
app.use('/shopping-cart', shoppingCartRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

app.listen(port, () => console.log(`This amazing app is listening at http://localhost:${port}`))

module.exports = app;