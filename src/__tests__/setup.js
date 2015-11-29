//This is important to setup localStorage for the unit tests
(() => {
    localStorage = {};
    localStorage.setItem = function (key, val) {
        this[key] = `${ val }`;
    };
    localStorage.getItem = function (key) {
        return this[key];
    };
    localStorage.removeItem = function (key) {
        delete this[key];
    };
    Object.defineProperty(localStorage, 'length', {
        get() {
            return Object.keys(this).length - 2;
        }
    });
})();