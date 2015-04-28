/** @jsx React.DOM */
var React       = require('react'),
	Loader      = require('react-loader'),
	Formsy      = require('formsy-react'),
	FormsyInput = require('views/helpers/input'),
	utils       = require('utils'),
	UserActions = require('actions/UserActions'),
	$           = require('jquery');

module.exports = React.createClass({

	getInitialState: function () {
		return {
			canSubmit: false,
			loaded: true
		};
	},

	submitForm: function (e) {
		e.preventDefault();

		var credentials = this.state.credentials;

		this.setState({loaded: false});

		$.when(utils.loginUser(credentials.email, this.state.password), function (result) {
			this.setState({
				categories: [],
				restaurants: result,
				resultNumber: {
					number: result.length,
					postcode: pcode
				},
				loaded: true
			});
		}.bind(this));
	},

	handleChange: function (values) {
		this.setState({credentials: values});
	},

	enableButton: function () {
		this.setState({
			canSubmit: true
		});
	},

	disableButton: function () {
		this.setState({ canSubmit: false });
	},

	onSubmit: function () {
		UserActions.loginUser(this.state.credentials);
		this.setState({ loaded: false });
	},

	render: function () {
		return (
			<div>
				<Formsy.Form className="form-horizontal"
					onSubmit={this.onSubmit}
					onValid={this.enableButton}
					onChange={this.handleChange}
					onInvalid={this.disableButton} >
					<div className="row">
						<FormsyInput
							wrapperClassName="form-group"
							labelClassName="col-xs-4 control-label"
							inputWrapperClassName="col-xs-7"
							inputClassName="form-control"
							name="Email"
							onChange={this.handleChange}
							type="email"
							validations="isEmail"
							validationError="Email inválido"
							placeholder="Obrigatório*"
							required />

						<FormsyInput
							wrapperClassName="form-group"
							labelClassName="col-xs-4 control-label"
							inputWrapperClassName="col-xs-7"
							inputClassName="form-control"
							name="Password"
							onChange={this.handleChange}
							type="password"
							placeholder="Obrigatório*"
							required />

						<div className="text-center">
							<button type="submit"
								disabled={!this.state.canSubmit}
								className="btn btn-default-red-inverse">
								Login
							</button>
						</div>
					</div>
				</Formsy.Form>
	  			<Loader loaded={this.state.loaded} className="spinner"></Loader>
	  		</div>
		);
	}
});