var React = require('react');
var BlogModel = require('../models/BlogModel.js');

module.exports = React.createClass({
	render: function(){

		var allCategories = ['animals', 'sports', 'movies'];
		var chooseCategory = allCategories.map(function(category){
			return(
				<option key ={category}>{category}</option>
			);
		});
		return(
			<form className="blog" onSubmit={this.postSubmitted}>
			<label>Blog Form</label>
				<div ref="error" className="error"></div>
				<div ref="success" className="success"></div>
				<div ref="success" className="success"></div>
				<input ref="titleInput" id="title-input" type="text" placeholder="Enter title"/>
				<textarea ref="textEntry" placeholder="Enter a Post"></textarea>
				<select ref="categories">
				<option value="default" >Select a Category</option>
					{chooseCategory}
					</select>
				<button>Submit</button>
			</form>
		);
	},
	postSubmitted: function(e){
		e.preventDefault();
		var post = new BlogModel({
			title: this.refs.titleInput.getDOMNode().value,
			entry: this.refs.textEntry.getDOMNode().value,
			category: this.refs.categories.getDOMNode().value,
			createdAt: new Date()

		});
		if(!post.isValid()){
			console.log(post.validationError)
			this.refs.success.getDOMNode().innerHTML = '';
			this.refs.error.getDOMNode().innerHTML = post.validationError;
		}
		else{
			 this.refs.titleInput.getDOMNode().value ='';
			 this.refs.textEntry.getDOMNode().value = '';
			 this.refs.categories.getDOMNode().value = 'default';
			this.refs.error.getDOMNode().innerHTML = '';
			this.props.newpost(post);
			this.refs.success.getDOMNode().innerHTML = 'Post submitted!';
		}


	},

});