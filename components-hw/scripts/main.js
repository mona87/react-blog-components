var React = require('react');
var CommentForm = require('./components/CommentForm.js');
var CommentList = require('./components/CommentList.js');
var CommentCollection = require('./collections/CommentCollection.js')
var BlogForm = require('./components/BlogForm.js');
var LoginForm = require('./components/LoginForm.js');
var BlogCollection = require('./collections/BlogCollection.js')
var BlogList = require('./components/BlogList.js')
var comments = new CommentCollection();

var blogPost = new BlogCollection([
	{
		title: 'Dogs',
		entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		category: 'animals',
		createdAt: new Date('2015-06-16T08:13:00'),
		userId: 'mona'
	},
	{
		title: 'Cats',
		entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		category: 'animals',
		createdAt: new Date('2015-06-16T10:04:00'),
		userId: 'mona'
	},
	{
		title: 'Movies',
		entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		category: 'movies',
		createdAt: new Date('2015-07-16T08:13:00'),
		userId: 'mona'
	},
	{
		title: 'Basketball',
		entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		category: 'sports',
		createdAt: new Date('2015-06-16T10:04:00'),
		userId: 'mona'
	}
	]);

function newPost(model){
	blogPost.add(model);
}
function newComment(model){
	comments.add(model);
}

React.render(
	<div>	
		<BlogForm newpost={newPost}/>
		<BlogList posts={blogPost} num={3}/>
		<CommentForm newcomment={newComment}/>
		<CommentList comments={comments}/>
		<LoginForm/>
	</div>,
	document.getElementById('container')
	
);

