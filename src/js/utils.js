'use strict';

import $ from 'jquery';

const makeRequest = (options = {}) => {
    let dfd = new $.Deferred(),
        user = localStorage.getItem('user');

    let request = {
        url: `http://localhost:3001/v1/${ options.url || '' }`,
        method: options.method || 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    if (options.data) {
        request.data = options.data;
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
        const dfd = $.Deferred();
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
        const dfd = $.Deferred();
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
        const dfd = $.Deferred();
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
        const dfd = $.Deferred();
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