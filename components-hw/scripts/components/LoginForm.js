var React = require('react');
var LoginModel = require('../models/LoginModel.js');

module.exports = React.createClass({
	render: function(){
		return(

			<form className="loginform" onSubmit={this.commentSubmitted}>
				<label>Login Form</label>
				<div ref="error" className="error"></div>
				<div ref="success" className="success"></div>
				<input ref="loginInput" type="text" placeholder="Enter username"/>
				<input ref="loginPass" type="password" placeholder="Enter password"/>
				<button>Submit</button>
			</form>

		);
	},
	commentSubmitted: function(e){
		e.preventDefault();
		// console.log('user '+this.refs.loginInput.getDOMNode().value);
		var login = new LoginModel({
			user: this.refs.loginInput.getDOMNode().value,
			password: this.refs.loginPass.getDOMNode().value
		});
		if(!login.isValid()){
			console.log(login.validationError);
			this.refs.success.getDOMNode().innerHTML = '';
			this.refs.error.getDOMNode().innerHTML = login.validationError;
		}
		else{
			this.refs.error.getDOMNode().innerHTML = '';
		 	this.refs.success.getDOMNode().innerHTML = 'Success!';
		
		}
	}

});