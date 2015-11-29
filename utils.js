//APP Config
const Deferred = require('promised-io/promise').Deferred;
const when = require('promised-io/promise').when;
const axios = require('axios');

process.on('uncaughtException', err => {
    console.log('uncaughtException: ', err);
});

const request = {
    headers: { 'Content-Type': 'application/json' },
    uri: 'http://localhost:3001/v1'
};

module.exports = {
    getRestaurants(params) {
        const dfd = new Deferred();
        const options = {
            headers: request.headers,
            url: `${ request.uri }/search`,
            method: 'get',
            params: params
        };
        axios(options).then(response => {
            dfd.resolve(JSON.stringify(response.data));
        }).catch(error => {
            console.log('error: ', error);
            dfd.reject(error);
        });
        return dfd.promise;
    },
    loginUser(params) {
        const dfd = new Deferred();
        const options = {
            headers: request.headers,
            method: 'POST',
            url: `${ request.uri }/login`,
            data: {
                email: params.Email,
                password: params.Password
            }
        };
        axios(options).then(response => {
            dfd.resolve(JSON.stringify(response.data));
        }).catch(error => {
            console.log('error: ', error);
            dfd.reject(error);
        });
        return dfd.promise;
    }
};