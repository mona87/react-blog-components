var Backbone = require('backbone');
Backbone.$ = require('jquery');
var validator = require('validator');

module.exports = Backbone.Model.extend({
	defaults: {
		user: '',
		password: ''
	},
	validate: function(model){
		if(validator.isNull(model.user)){
			return 'Enter an email address.'
		}
		else if(!validator.isEmail(model.user)){
			return 'Enter a valid email address'
		}
		else if(validator.isNull(model.password)){
			return 'Enter a password'
		}		
		else if(model.user !== 'mona@gmail.com' && model.password !== 'password'){
			return 'That username / password combination doesn\'t exist.'
		}
		else{
			return 'success'
		}
	}
})