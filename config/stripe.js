var stripe = require("stripe")(require('./stripe-key.js'));

module.exports = stripe;