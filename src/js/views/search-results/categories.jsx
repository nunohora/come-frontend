/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

	renderCategories: function () {
		console.log(this.props.params);

		return _.map(this.props.params, function (category) {

		});
	},

	render: function () {
	  return (
	  	<div className="side-panel">
			<div className="categories">
				<h4>Categorias</h4>
				<ul className="list-unstyled">
					<li>
						<a href="#">Chinesa</a>
					</li>
					<li>
						<a href="#">Churrasco</a>
					</li>
					<li>
						<a href="#">Vegetariano</a>
					</li>
					<li>
						<a href="#">Brasileira</a>
					</li>
					<li>
						<a href="#">Francesinhas</a>
					</li>
				</ul>
			</div>
		</div>
	    );
	}
});