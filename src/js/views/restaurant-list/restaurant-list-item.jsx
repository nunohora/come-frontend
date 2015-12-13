var React = require('react'),
	Link  = require('react-router').Link,
	_     = require('underscore'),
	slug  = require('slug');

module.exports = React.createClass({

	renderRating: function () {
		return (
			<div className="rating">
				<div className="rating-stars">
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>
				</div>
				<div className="rating-number">
					27 Ratings
				</div>
			</div>
		);
	},

	renderCategories: function () {
		var categories = this.props.params.categories,
			string = '';

		_.each(categories, function (category) {
			string = string + category.name;

			if (_.indexOf(categories, category) + 1 !== categories.length) {
				string += ', ';
			}
		});

		return (
			<p>
				<i className="fa fa-cutlery"></i>
				{string}
			</p>
		);
	},

	render: function () {
		var routeParams = {
			id: this.props.params.id,
			slug: slug(this.props.params.name, {lower: true})
		};

	  	return (
			<div className="restaurant-list">
				<div className="row">
					<div className="col-md-3">
						<div className="restaurant-list-img">
							<img className="" src="img/content/blog-post.jpg" alt="" />
						</div>
					</div>
					<div className="col-md-9 restaurant-list-inner">
						<h4>
							<Link to="places" params={routeParams}>
								{this.props.params.name}
							</Link>
						</h4>
						{this.renderRating()}
						<div className="address">
							<p>
								<i className="fa fa-map-marker"></i>
								{this.props.params.address}
							</p>
						</div>
						<div className="tag-list">
							{this.renderCategories()}
						</div>
					</div>
					<Link to="places"
						params={routeParams}
						className="btn btn-default-red-inverse view-menu">
						<i className="fa fa-list-ul"></i>
						Ver Menu
					</Link>
				</div>
			</div>
	    );
	}
});