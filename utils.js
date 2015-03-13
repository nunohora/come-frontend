//APP Config
var Deferred = require('promised-io/promise').Deferred,
	when 	 = require('promised-io/promise').when,
	rp       = require('request-promise');

process.on('uncaughtException', function (err) {
	console.log('uncaughtException: ', err);
});

var makeRequest = function (endpoint) {
		var dfd = new Deferred();

		var request = {
			uri: 'http://come.herokuapp.com/api/v1/' + endpoint,
			method: 'GET',
			headers: {
			    'Content-Type': 'application/json'
			}
		};

		rp(request)
			.then(function (resp) {
				dfd.resolve(resp);
			})
			.catch(function (error) {
				console.log('Error: ', error);
				dfd.reject(error);
			});

		return dfd.promise;
	};

module.exports = {
	getRestaurants: function (postcode, data) {
		var dfd = new Deferred(),
			url = 'restaurants';

		when(makeRequest(url))
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
		var dfd = new Deferred(),
			url = 'login';

		when(makeRequest(url, options))
			.then(
				function (response) {
					dfd.resolve(response);
				},
				function (error) {
					console.log('Error: ', error);
					dfd.reject(error);
				});

		return dfd.promise;
	}
};