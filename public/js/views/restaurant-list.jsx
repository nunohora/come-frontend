/** @jsx React.DOM */
define(function (require) {
	var React = require('react'),
		RestaurantListItem = require('jsx!views/restaurant-list-item'),
		Categories = require('jsx!views/categories');

	var endpoint = '/api/postcode/';

	return React.createClass({

		getInitialState: function () {
			return {
				categories: [],
				restaurants: []
			};
		},

		componentDidMount: function () {
			var pcode = this.props.params.pcode;

			$.get(endpoint + pcode, function (result) {

				if (this.isMounted()) {
					this.setState({
						categories: [],
						restaurants: []
					})
				}
				console.log('result: ', result);
			
			}.bind(this));
		},

		render: function () {
		  	return (
	  			<div className="container">
		  			<div className="col-md-3 col-sm-12 col-xs-12">
						<div className="blog-side-panel">

							<Categories params={this.state.categories} />
						
						</div>
					</div>
					
					<RestaurantListItem params={this.state.restaurants} />
					
					<div className="col-md-9 col-sm-12 col-xs-12">
						<div className="pagination">
							<ul className="list-inline  text-right">
								<li className="active"><a href="#">1</a>
								</li>
								<li><a href="#">2</a>
								</li>
								<li><a href="#">3</a>
								</li>
								<li><a href="#">4</a>
								</li>
								<li><a href="#">5</a>
								</li>
								<li><a href="#">6</a>
								</li>
							</ul>
						</div>
					</div>
	  			</div>
		    );
		}
	});
});