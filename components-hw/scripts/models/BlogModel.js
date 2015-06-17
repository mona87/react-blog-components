var Backbone = require('backbone');
Backbone.$ = require('jquery');
var validator = require('validator');

module.exports = Backbone.Model.extend({
	defaults: {
		title: null,
		entry: null,
		category: null,
		createdAt: null,
		userId: null
	},
	validate: function(model){
		if(validator.isNull(model.title)){
			return 'Please enter a title'
		}
		else if (validator.isNull(model.entry)){
			return 'Please enter a post'
		}
		else if (model.category === 'Select a Category' ){
			return 'Please select a category'
		}

	}
})