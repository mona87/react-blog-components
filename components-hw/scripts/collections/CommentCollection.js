var Backbone = require('backbone');
Backbone.$ = require('jquery');
var CommentModel = require('../models/CommentModel.js');

module.exports = Backbone.Collection.extend({
	model: CommentModel,
	url: ''
})