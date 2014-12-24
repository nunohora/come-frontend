/** @jsx React.DOM */
define(function (require) {
	var React = require('react'),
		Link = require('react-router').Link;

	var SearchPostcode = React.createClass({

	  	getInitialState: function() {
			return {postcode: 'none'};
	  	},

		onChange: function (event) {
			this.setState({postcode: event.target.value});
		},

		render: function () {
			var postcode = this.state.postcode;

		  	return (
		  		<div className="css-table-cell">
			  		<div className="css-table-cell">
				  		<div className="main-postcode-search css-table-cell">
							<input className="form-control" onChange={this.onChange} type="text" placeholder="Insira o seu codigo postal" />
						</div>
			  		</div>
			  		<div className="css-table-cell">
						<Link to="postcode" params={{pcode: postcode}} className="btn btn-default-red-inverse pad-top">
							Procure um takeaway
						</Link>
					</div>
		  		</div>
		    );
		}
	});

	return SearchPostcode;
});