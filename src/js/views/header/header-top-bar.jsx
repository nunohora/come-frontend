var React = require('react');

module.exports = React.createClass({
	render: function () {
	  	return (
			<div className="header-top-bar">
				<div className="container">
					<div className="row">
						<ul className="header-social">
							<li>
								<i className="fa fa-lg fa-facebook-square"></i>
							</li>
							<li>
								<i className="fa fa-lg fa-twitter-square"></i>
							</li>
							<li>
								<i className="fa fa-lg fa-google-plus-square"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
	    );
	}
});