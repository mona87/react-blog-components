var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.comments.on('add', this.addComment);
	},
	render: function(){
		console.log('true')
		var comment = this.props.comments.map(function(model){
				return(
					<div key={model.cid}>
					<div className="date">{model.get('createdAt').toString()}</div>
					<div><span><strong>user:</strong></span> {model.get('text')}</div>
					</div>
				);			
		});
		return(
			<div className="comments">
				{comment}
			</div>
		);
	},
	addComment: function(model){
		this.forceUpdate();
	}
});
