// preprocessor.js
const ReactTools = require('react-tools');

module.exports = {
    process(src) {
        return ReactTools.transform(src);
    }
};