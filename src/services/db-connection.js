const { connect } = require('mongoose');

const { config } = require('../config/config');

connect(config.db.connectionString)
	.then(() => console.log('conection succesfull'))
	.catch((err) => console.log('conection error', err));