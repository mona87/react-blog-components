var React = require('react');
var BlogModel = require('../models/BlogModel.js');

module.exports = React.createClass({
	render: function(){
		return(
			<form className="blog" onSubmit={this.commentSubmitted}>
			<label>Blog Form</label>
				<input ref="titleInput" id="title-input" type="text" placeholder="Enter title"/>
				<textarea ref="textEntry" placeholder="Enter a Post"></textarea>
				<select ref="categories">
					<option selected disabled>Select a Category</option>
					<option>Animals</option>
					<option>Sports</option>
					<option>Movies</option>
				</select>
				<button>Submit</button>
			</form>
		);
	},
	commentSubmitted: function(e){
		e.preventDefault();
		var post = new BlogModel({
			title: this.refs.titleInput.getDOMNode().value,
			entry: this.refs.textEntry.getDOMNode().value,
			category: this.refs.categories.getDOMNode().value

		});
		if(!post.isValid()){
			console.log(post.validationError)
		}
		else{
			console.log('Post submitted');
		}


	}

});