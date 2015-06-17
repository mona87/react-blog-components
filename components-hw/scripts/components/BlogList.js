var React = require('react');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = React.createClass({
		componentWillMount: function(){
			this.props.posts.on('add', this.addPost);		
		},
		getInitialState: function(){
			return{
				number: this.props.num,
				text: ''
			};
		},
		render: function(){
			var sortMods = this.props.posts.sortBy(function(mods){
				return -1*mods.get('createdAt').getTime();
			})
			var topPosts = _.first(sortMods, this.state.number);
			console.log(this.state.number);		
			var topElements = topPosts.map(function(model){
				return(
				
						<div key={model.cid}>
							<h3>{model.get('title')}<br/>
							<span className="date">{model.get('createdAt').toString()} | {model.get('category')}</span>
							</h3>
							<p>{model.get('entry')}</p>
						</div>				
				);
			});
			return(
				<div className="blog-input">
					<h3>Number of Post to Show</h3>
					<input  type="text" ref="number" onChange={this.numChange}/>
					<div className="mypost">{topElements} <p>{this.state.text}</p></div>
				</div>
			);	
		},
		addPost: function(model){
			this.forceUpdate();
		},
		numChange: function(e){
			var newNum = this.refs.number.getDOMNode().value;
			newNum = parseInt(newNum);
			if(newNum === 0){	
				this.setState({
					number: newNum,
					text: 'There are no blog posts yet.'
				});
			}else{
				this.setState({
					number: newNum,
					text: ''
				});
			}
	}
})