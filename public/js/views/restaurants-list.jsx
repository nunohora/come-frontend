/** @jsx React.DOM */
define(function (require) {
	var React = require('react');

	var RestaurantsList = React.createClass({
		render: function () {
		  	return (
	  			<div className="container">
		  			<div className="col-md-4 col-sm-12 col-xs-12">
						<div className="blog-side-panel">
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
					</div>
					<div className="col-md-8 col-sm-12 col-xs-12">
						<div className="blog-list">
							<div className="row">
								<div className="col-md-4 col-sm-4">
									<div className="blog-list-img">
										<img className="" src="img/content/blog-post.jpg" alt="" />
									</div>
								</div>
								<div className="col-md-8 col-sm-8">
									<h5><a href="#">News Title Goes Here</a>
									</h5>
									<ul className="list-inline">
										<li className="place">
											<i className="fa fa-user"></i>
											<span className="bl-sort">by</span><a href="#">Abu Antar</a></li>
										<li className="date"><i className="fa fa-clock-o"></i></li>
									</ul>

									<p className="bl-sort">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue,suscipit a, scelerisque sed, lacinia in, mi.</p>
									<a href="blog-post.html">Read More</a>
									<div className="tag-list">
										<p><i className="fa fa-folder-open"></i><a href="#">Meat</a>, <a href="#">Drinks</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="blog-list">
							<div className="row">
								<div className="col-md-4 col-sm-4">
									<div className="blog-list-img">
										<img className="" src="img/content/blog-post-2.jpg" alt="" />
									</div>
								</div>
								<div className="col-md-8 col-sm-8">
									<h5><a href="#">News Title Goes Here</a>
									</h5>
									<ul className="list-inline">
										<li className="place"><i className="fa fa-user"></i>
											<span className="bl-sort">by</span><a href="#">Abu Antar</a></li>
										<li className="date"><i className="fa fa-clock-o"></i>27.6.2014 at 17.33</li>
									</ul>
									<p className="bl-sort">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue,suscipit a, scelerisque sed, lacinia in, mi.</p>
									<a href="blog-post.html">Read More</a>
									<div className="tag-list">
										<p><i className="fa fa-folder-open"></i><a href="#">Meat</a>, <a href="#">Drinks</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="blog-list">
							<div className="row">
								<div className="col-md-4 col-sm-4">
									<div className="blog-list-img">
										<img className="" src="img/content/blog-post-3.jpg" alt="" />
									</div>
								</div>
								<div className="col-md-8 col-sm-8">
									<h5><a href="#">News Title Goes Here</a>
									</h5>
									<ul className="list-inline">
										<li className="place"><i className="fa fa-user"></i>
											<span className="bl-sort">by</span><a href="#">Abu Antar</a></li>
										<li className="date"><i className="fa fa-clock-o"></i>27.6.2014 at 17.33</li>
									</ul>
									<p className="bl-sort">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue,suscipit a, scelerisque sed, lacinia in, mi.</p>
									<a href="blog-post.html">Read More</a>
									<div className="tag-list">
										<p><i className="fa fa-folder-open"></i><a href="#">Meat</a>, <a href="#">Drinks</a>
										</p>
									</div>
								</div>
							</div>
						</div>

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

	return RestaurantsList;
});