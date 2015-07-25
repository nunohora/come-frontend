/** @jsx React.DOM */
var React            = require('react'),
	LinkedStateMixin = React.addons.LinkedStateMixin,
	Loader           = require('react-loader'),
	ValidationMixin  = require('react-validation-mixin'),
	Joi              = require('joi'),
	utils            = require('../../utils'),
	UserActions      = require('../../actions/UserActions');

module.exports = React.createClass({

	mixins: [ValidationMixin, LinkedStateMixin],

	validatorTypes: {
		email: Joi.string().email().required(),
		password: Joi.string().required()
	},

	getInitialState: function () {
		return {
			email: null,
			password: null,
			loaded: true
		};
	},

	onSubmit: function (e) {
		e.preventDefault();

		var onValidate = function (error, validationErrors) {
			if (!error) {
				UserActions.loginUser(this.state.credentials);
				this.setState({ loaded: false });
			}
		}.bind(this);

		this.validate(onValidate);
	},

	getClasses: function(field) {
		return React.addons.classSet({
			'form-group': true,
			'has-error': !this.isValid(field)
		});
	},

	handleReset: function(event) {
		event.preventDefault();
		this.clearValidations();
		this.setState(this.getInitialState());
	},

	renderHelpText: function(message) {
		return (
			<small ref='helpBlock' className="help-block">{message}</small>
		);
	},

	render: function () {
		return (
			<div>
				<form onSubmit={this.onSubmit} className="form-horizontal">
					<div className="row">
						<div className={this.getClasses('email')}>
							<label className="col-xs-4 control-label" htmlFor='email'>Email</label>
							<div className="col-xs-7">
								<input
									onBlur={this.handleValidation('email')}
									valueLink={this.linkState('email')}
									id="email"
									ref="email"
									className="form-control email"
									type="email"
									placeholder="Obrigatório*"/>
							</div>
							{this.getValidationMessages('email').map(this.renderHelpText)}
						</div>
						<div className={this.getClasses('password')}>
							<label className="col-xs-4 control-label" htmlFor='password'>Password</label>
							<div className="col-xs-7">
								<input
									onBlur={this.handleValidation('password')}
									valueLink={this.linkState('password')}
									id="password"
									ref="password"
									className="form-control password"
									type="password"
									placeholder="Obrigatório*"/>
							</div>
							{this.getValidationMessages('password').map(this.renderHelpText)}
						</div>
						<div className="text-center">
							<button type="submit"
								className="btn btn-default-red-inverse">
								Login
							</button>
						</div>
					</div>
				</form>
	  			<Loader loaded={this.state.loaded} className="spinner"></Loader>
	  		</div>
		);
	}
});