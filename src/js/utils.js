var $ = require('jquery');

var makeRequest = function (options) {
	var dfd = new $.Deferred(),
		options = options || {},
		request;

	request = {
		url: '/api/' + (options.url || ''),
		method: options.method || 'GET',
		headers: {
		    'Content-Type': 'application/json'
		}
	};

	if (options.data) {
		request.data = options.data;
	}

	$.ajax(request)
		.then(function (resp) {
			dfd.resolve(JSON.parse(resp));
		})
		.fail(function (error) {
			console.log('Error: ', error);
			dfd.reject(error);
		});

	return dfd.promise();
};

var apiEndpoint = '/api/';

module.exports = {

	getApiEndpoint: function () {
		return '/api/';
	},

	getRestaurants: function (postcode) {
		var dfd = new $.Deferred();

		var options = {
			method: 'GET',
			url: 'postcode/' + postcode
		};

		$.when(makeRequest(options))
			.then(
				function (response) {
					dfd.resolve(response);
				},
				function (error) {
					console.log('Error: ', error);
					dfd.reject(error);
				});

		return dfd.promise();
	},

	loginUser: function (email, password) {
		var dfd = new $.Deferred(),
			url = 'login',
			data = {email: email, password: password};

		var options = {
			url: 'login',
			method: 'POST',
			data: JSON.stringify(data)
		};

		$.when(makeRequest(options))
			.then(
				function (response) {
					console.log(response);
					dfd.resolve(response);
				},
				function (error) {
					console.log('Error: ', error);
					dfd.reject(error);
				});

		return dfd.promise();
	}
};