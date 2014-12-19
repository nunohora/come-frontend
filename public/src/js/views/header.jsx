/** @jsx React.DOM */
define(function (require) {
	var React = require('react'),
		Link = require('react-router').Link;

	var Header = React.createClass({
		render: function () {
		  	return (
		      <header id="header">
				<div className="header-top-bar">
					<div className="container">
						<div className="row">
							<div className="col-md-5 col-sm-12 col-xs-12">
								<div className="header-login">
									<a href="#">Order online</a>
									<a href="#">Login</a>
								</div>
								<ul className="header-social">
									<li><i className="fa fa-facebook-square"></i>
									</li>
									<li><i className="fa fa-twitter-square"></i>
									</li>
									<li><i className="fa fa-google-plus-square"></i>
									</li>
								</ul>
							</div>
							<div className="col-md-7 col-sm-12 col-xs-12">
								<p className="call-us">
									<span className="open-now">
									<i className="fa fa-check-square"></i>We are open now(9am-10pm)</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="header-nav-bar">
					<nav className="navbar navbar-default" role="navigation">
						<div className="container">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<Link className="navbar-brand" to="/">
									<img src="src/img/header-logo.png" alt="TakeAway" />
								</Link>
							</div>
							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav navbar-right">
									<li className="dropdown">
										<a href="#" className="dropdown-toggle act" data-toggle="dropdown">Home</a>
										<ul className="dropdown-menu" role="menu">
											<li><a href="index.html">Home-1</a></li>
											<li><a href="index-landingpage.html">Home landing</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Menu Card</a>
										<ul className="dropdown-menu" role="menu">
											<li><a href="menu(view-1).html">Menu( view-1 )</a></li>
											<li><a href="menu(view-2).html">Menu( view-2 )</a></li>
											<li><a href="menu-without-side-panel.html">Menu( grid-view )</a></li>
											<li><a href="single-menu.html">Single Menu</a></li>
											<li><a href="menu(2grid-list).html">Menu( 2grid-list-view )</a></li>
											<li><a href="menu-with-right-checkout.html">Menu( with-checkout )</a></li>
											<li><a href="dish.html">Dish</a></li>
											<li><a href="dish-with-no-sidebar.html">Dish ( No Sidebar )</a></li>
											<li><a href="shortcodes.html">Shortcodes</a></li>
										</ul>
									</li>
									<li><a href="chef.html">Chef</a>
									</li>
									<li><a href="our-team.html">Team</a>
									</li>

									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog</a>
										<ul className="dropdown-menu" role="menu">
											<li><a href="blog-list.html">Blog List</a></li>
											<li><a href="blog-post.html">Blog Post</a></li>
										</ul>
									</li>
									<li>
										<Link to="contact-us">Contact us</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="small-menu">
					<ul className="list-unstyled list-inline">
						<li><a href="#">Home</a>
						</li>
						<li><i className="fa fa-chevron-right"></i>
						</li>
						<li><a href="our-team.html">Team</a>
						</li>
					</ul>
				</div>
			</header>
		    );
		}
	});

	return Header;
});