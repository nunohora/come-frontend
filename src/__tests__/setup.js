//This is important to setup localStorage for the unit tests
(function () {
    localStorage = {};
    localStorage.setItem = function (key, val) {
        this[key] = val + '';
    }
    localStorage.getItem = function (key) {
        return this[key];
    }
    Object.defineProperty(localStorage, 'length', {
        get: function () { return Object.keys(this).length - 2; }
    });
})();
