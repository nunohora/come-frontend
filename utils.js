//APP Config
var Deferred = require('promised-io/promise').Deferred,
	when 	 = require('promised-io/promise').when,
	rp       = require('request-promise');

process.on('uncaughtException', function (err) {
	console.log('uncaughtException: ', err);
});

var makeRequest = function (options) {
	var dfd = new Deferred(),
		options = options || {};

	var request = {
		uri: 'https://come-api-211435.euw1-2.nitrousbox.com/api/' + (options.url || ''),
		method: options.method || 'GET',
		headers: {
		    'Content-Type': 'application/json'
		}
	};

	if (options.data) {
		request.data = options.data;
	}

	rp(request)
		.then(function (resp) {
			dfd.resolve(resp);
		})
		.catch(function (error) {
			// console.log('Error: ', error);
			dfd.reject(error);
		});

	return dfd.promise;
};

module.exports = {
	getRestaurants: function (postcode, data) {
		var dfd = new Deferred();

		var options = {
			method: 'GET',
			url: 'v1/restaurants'
		};

		when(makeRequest(options))
			.then(
				function (response) {
					dfd.resolve(response);
				},
				function (error) {
					console.log('Error: ', error);
					dfd.reject(error);
				});

		return dfd.promise;
	},

	loginUser: function (email, password) {
		var dfd = new Deferred();

		var options = {
			method: 'POST',
			url: 'login',
			data: {
				email: email,
				password: password
			}
		};

		when(makeRequest(options))
			.then(
				function (response) {
					dfd.resolve(response);
				},
				function (error) {
					// console.log('Error: ', error);
					dfd.reject(error);
				});

		return dfd.promise;
	}
};