//APP Config
var Deferred = require('promised-io/promise').Deferred,
	when 	 = require('promised-io/promise').when,
	axios    = require('axios');

process.on('uncaughtException', function (err) {
	console.log('uncaughtException: ', err);
});

var request = {
	headers: { 'Content-Type': 'application/json' },
	uri: 'http://localhost:3001/v1'
};

module.exports = {
	getRestaurants: function (params) {
		var dfd = new Deferred();

		var options = {
			headers: request.headers,
			url: request.uri + '/search',
			method: 'get',
			params: params
		};

		axios(options)
			.then(function (response) {
				dfd.resolve(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log('error: ', error);
				dfd.reject(error);
			});

		return dfd.promise;
	},

	loginUser: function (params) {
		var dfd = new Deferred();

		var options = {
			headers: request.headers,
			method: 'POST',
			url: request.uri + '/login',
			data: {
				email: params.Email,
				password: params.Password
			}
		};

		axios(options)
			.then(function (response) {
				dfd.resolve(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log('error: ', error);
				dfd.reject(error);
			});

		return dfd.promise;
	}
};