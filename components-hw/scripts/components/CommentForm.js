var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = require('jquery');
var CommentModel = require('../models/CommentModel.js');
var CommentCollection = require('../collections/CommentCollection.js');

// var Commentlist = require('./Commentlist.js')

module.exports = React.createClass({
	render: function(){
		return(
			<div>
				<div className="commentForm">
					<label>Comment Form</label>
					<form  onSubmit ={this.commentSubmitted}>
						<input ref="commentText" type="text" placeholder="Enter comment here..."/>
						<button>Submit </button>				
					</form>
				</div>
				<div ref="commentAdded"className="comments">
				</div>
			</div>
			
		);
	},
	commentSubmitted: function(e){
		e.preventDefault();
		var commentlist = new CommentCollection();
		var comment = new CommentModel({
			text: this.refs.commentText.getDOMNode().value,
			createdAt: new Date()
		})
		if(!comment.isValid()){
			console.log(comment.validationError);
		}
		else{		
			 console.log(comment);
			 // console.log(this.refs.commentAdded.getDOMNode());
			// this.refs.commentAdded.getDOMNode().innerHTML.appendChild(comment.get('text'));
		}
		
		commentlist.add(comment);
		commentlist.on('add', function(model){
			// console.log('true')
			
		})

	}
});