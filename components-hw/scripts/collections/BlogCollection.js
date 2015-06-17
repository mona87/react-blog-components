var Backbone = require('backbone');
Backbone.$ = require('jquery');
var BlogModel = require('../models/BlogModel.js');

module.exports = Backbone.Collection.extend({
	model: BlogModel
})