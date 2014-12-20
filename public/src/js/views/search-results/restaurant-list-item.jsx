/** @jsx React.DOM */
define(function (require) {
	var React = require('react');

	return React.createClass({

		renderRating: function () {
			var rating = this.props.params.rating;

			return (
				<div className="rating">
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>
					<span>☆</span>
				</div>
			);
		},

		render: function () {
		  	return (
				<div className="blog-list">
					<div className="row">
						<div className="col-md-4 col-sm-4">
							<div className="blog-list-img">
								<img className="" src="src/img/content/blog-post.jpg" alt="" />
							</div>
						</div>
						<div className="col-md-8">
							<h4>
								<a href="#">{this.props.params.name}</a>
							</h4>
							{this.renderRating()}
							<ul className="list-inline">
								<li className="place">
									{this.props.params.address}
								</li>
								<li className="date">
									<i className="fa fa-clock-o"></i>
								</li>
							</ul>
							<div className="tag-list">
								<p>
									<i className="fa fa-cutlery"></i>
									Chinesa
								</p>
							</div>

						</div>
					</div>
				</div>
		    );
		}
	});
});