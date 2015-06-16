var React = require('react');
var CommentForm = require('./components/CommentForm.js');
var Commentlist = require('./components/Commentlist.js');
var BlogForm = require('./components/BlogForm.js');
var LoginForm = require('./components/LoginForm.js')

React.render(
	<div>	
		<BlogForm/>
		<CommentForm/>
		<LoginForm/>
	</div>,
	document.getElementById('container')
	
);

