/** @jsx React.DOM */
var React = require('react'),
	Formsy = require('formsy-react'),
	utils = require('utils'),
	$ 	  = require('jquery');

var EmailInput = React.createClass({

	mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue: function (event) {
      this.setValue(event.currentTarget.value);
    },

    render: function () {
      var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;
      	errorMessage = this.getErrorMessage();

  	console.log(errorMessage);

  	return (
        <div className={className}>
          <input type="text" onChange={this.changeValue} value={this.getValue()}/>
          <span>{errorMessage}</span>
        </div>
      );
    }
});

module.exports = React.createClass({

	handleClick: function (e) {
		e.preventDefault();

		$.when(utils.loginUser(this.state.email, this.state.password), function (result) {
			if (this.isMounted()) {
				this.setState({
					categories: [],
					restaurants: result,
					resultNumber: {
						number: result.length,
						postcode: pcode
					}
				});
			}
		}.bind(this));
	},

	handleChange: function (e) {
		var state = {};

		state[e.target.name] = e.target.value;
		this.setState(state);
	},

	render: function () {

	  	return (
	  		<div className="container">
		  		<div className="login-form col-md-3 col-sm-6 col-xs-9">
					<h4>Login</h4>
					<Formsy.Form>
						<div className="row">
							<div className="col-md-12">
								<EmailInput
									name="email"
									onChange={this.handleChange}
									type="text"
									validations="isEmail"
									validationError="This is not a valid email"
									placeholder="Email*"
									required />

								<input
									name="password"
									onChange={this.handleChange}
									type="password"
									placeholder="Password*"
									required />

								<button className="login-button" onClick={this.handleClick}>
									<i className="fa fa-paper-plane-o"></i>
									Login
								</button>

							</div>
						</div>
					</Formsy.Form>
				</div>
	  		</div>
		);
	}
});