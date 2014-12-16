/** @jsx React.DOM */
define(function (require) {
	var React = require('react');
	
	return React.createClass({
		render: function () {
		  	return (
				<div className="blog-list">
					<div className="row">
						<div className="col-md-4 col-sm-4">
							<div className="blog-list-img">
								<img className="" src="img/content/blog-post.jpg" alt="" />
							</div>
						</div>
						<div className="col-md-8 col-sm-8">
							<h4>
								<a href="#">{this.props.params.name}</a>
							</h4>
							<ul className="list-inline">
								<li className="place">
									<a href="#">Abu Antar</a></li>
								<li className="date"><i className="fa fa-clock-o"></i></li>
							</ul>
							<input type="number" className="rating" min="1" max="10" step="2" data-size="lg" data-rtl="true" />
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