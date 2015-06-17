var React = require('react');
var CommentModel = require('../models/CommentModel.js');

module.exports = React.createClass({
	render: function(){
		return(
				<form  onSubmit ={this.commentSubmitted}>
					<div className="commentForm">
					<label>Comment Form</label>
					<div ref="error" className="error">
					</div>
					<input ref="commentText" type="text" placeholder="Enter comment here..."/>
					<button>Submit </button>				
					</div>
				</form>
				
		
			
		);
	},
	commentSubmitted: function(e){
		e.preventDefault();
		var comment = new CommentModel({
			text: this.refs.commentText.getDOMNode().value,
			createdAt: new Date()
		})
		if(!comment.isValid()){
			this.refs.error.getDOMNode().innerHTML = comment.validationError;

		}
		else{		
			this.refs.error.getDOMNode().innerHTML = '';
			text: this.refs.commentText.getDOMNode().value = '';
			this.props.newcomment(comment);

		}

	}
});