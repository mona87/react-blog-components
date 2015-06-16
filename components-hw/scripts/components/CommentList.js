var React = require('react');
var CommentList= require('../collections/CommentCollection.js');
var CommentModel = require('../models/CommentModel.js');

module.exports = React.createClass({
	render: function(){
		return(
			<div ref="comment">
				test
			</div>
		);
	},
	  componentWillMount: function (){
	  	var comments = new CommentList();
		this.refs.comment.getDOMNode().value().innerHtml();
	  }
		
	

});
