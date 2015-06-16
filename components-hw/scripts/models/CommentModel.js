var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults:{
		text: '',
		createdAt: null,
		userID: null
	},
	validate: function(attr){
		if(!attr.text){
			return 'You must enter a string'
		}
		else{
			return false
		}
	}
})
