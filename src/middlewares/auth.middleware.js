/* eslint-disable consistent-return */
/* eslint-disable callback-return */
'use strict';

const { config } = require('../config/config');
const { handleAccessDenied, handleError } = require('../utils/responses')

/** Validate token sent from firebase */
const validateAuthToken = async (req, res, next) => {
	try {
		if (req && req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
			const token = req.headers.authorization.split('Bearer ')[1];

			if (token !== config.authToken) {
				return handleAccessDenied(res);
			}
		} else {
			return handleAccessDenied(res);
		}
		next();
	} catch (error) {
		return handleError(res, error);
	}
}

module.exports = {
	validateAuthToken,
}