var React = require('react');
var LoginModel = require('../models/LoginModel.js');

module.exports = React.createClass({
	render: function(){
		return(

			<form className="loginform" onSubmit={this.commentSubmitted}>
				<label>Login Form</label>
				<input ref="loginInput" type="text" placeholder="Enter username"/>
				<input ref="loginPass" type="text" placeholder="Enter password"/>
				<button>Submit</button>
			</form>

		);
	},
	commentSubmitted: function(e){
		e.preventDefault();
		console.log('user '+this.refs.loginInput.getDOMNode().value);
		var login = new LoginModel({
			user: this.refs.loginInput.getDOMNode().value,
			password: this.refs.loginPass.getDOMNode().value
		});
		if(!login.isValid()){
			console.log(login.validationError);
		}
		else{
			console.log('Success!');
		}
	}

});