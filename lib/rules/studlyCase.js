var pattern = /^[A-Z][a-zA-Z0-9]*$/;

module.exports = function (key, value) {
    return pattern.test(value);
};
