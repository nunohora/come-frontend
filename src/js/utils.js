'use strict';

const $ = require('jquery');

const makeRequest = function (options) {
    let dfd = new $.Deferred(), opts = options || {}, user = localStorage.getItem('user'), request;
    request = {
        url: `http://localhost:3001/v1/${ opts.url || '' }`,
        method: opts.method || 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    if (opts.data) {
        request.data = opts.data;
    }
    if (user) {
        user = JSON.parse(user);
        request.headers.Authorization = user.access_token;
    }
    $.ajax(request).then(resp => {
        dfd.resolve(resp);
    }).fail(error => {
        console.log('Error: ', error);
        dfd.reject(error);
    });
    return dfd.promise();
};

module.exports = {
    getRestaurantsByLocation(location) {
        const dfd = new $.Deferred();
        const options = {
            method: 'GET',
            url: 'search/',
            data: { location: location }
        };
        $.when(makeRequest(options)).then(response => {
            dfd.resolve(response);
        }, error => {
            dfd.reject(error);
        });
        return dfd.promise();
    },
    getRestaurantById(id) {
        const dfd = new $.Deferred();
        const options = {
            method: 'GET',
            url: `places/${ id }`
        };
        $.when(makeRequest(options)).then(response => {
            dfd.resolve(response);
        }, error => {
            dfd.reject(error);
        });
        return dfd.promise();
    },
    getRestaurantProducts(id) {
        const dfd = new $.Deferred();
        const options = {
            method: 'GET',
            url: `places/${ id }/products`
        };
        $.when(makeRequest(options)).then(response => {
            dfd.resolve(response);
        }, error => {
            dfd.reject(error);
        });
        return dfd.promise();
    },
    loginUser(params) {
        const dfd = new $.Deferred();
        const options = {
            method: 'POST',
            url: 'login',
            data: JSON.stringify(params)
        };
        $.when(makeRequest(options)).then(response => {
            dfd.resolve(response);
        }, error => {
            console.log('Error: ', error);
            dfd.reject(error);
        });
        return dfd.promise();
    }
};