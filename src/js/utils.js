var $ = require('jquery');

var makeRequest = function (options) {
	var dfd = new $.Deferred(),
		opts = options || {},
		request;

	request = {
		url: '/api/' + (opts.url || ''),
		method: opts.method || 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	if (opts.data) {
		request.data = opts.data;
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

module.exports = {
	getRestaurants: function (params) {
		var dfd = new $.Deferred();

		var options = {
			method: 'GET',
			url: 'search/',
			data: params
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

	loginUser: function (params) {
		var dfd = new $.Deferred(),
			url = 'login';

		var options = {
			method: 'POST',
			url: 'login',
			data: params
		};

		$.when(makeRequest(options))
			.then(
				function (response) {
					console.log('login response: ', response);
					dfd.resolve(response);
				},
				function (error) {
					console.log('Error: ', error);
					dfd.reject(error);
				});

		return dfd.promise();
	}
};