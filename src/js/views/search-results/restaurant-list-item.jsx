/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

	renderRating: function () {
		var rating = this.props.params.rating;

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

	render: function () {
	  	return (
			<div className="restaurant-list">
				<div className="row">
					<div className="col-md-3">
						<div className="restaurant-list-img">
							<img className="" src="src/img/content/blog-post.jpg" alt="" />
						</div>
					</div>
					<div className="col-md-9 restaurant-list-inner">
						<h4>
							<a href="#">{this.props.params.name}</a>
						</h4>
						{this.renderRating()}
						<div className="address">
							<p>
								<i className="fa fa-map-marker"></i>
								{this.props.params.address}
							</p>
						</div>
						<div className="tag-list">
							<p>
								<i className="fa fa-cutlery"></i>
								Chinesa
							</p>
						</div>
					</div>
					<a className="btn btn-default-red-inverse view-menu">
						<i className="fa fa-list-ul"></i>
						Ver Menu
					</a>
				</div>
			</div>
	    );
	}
});