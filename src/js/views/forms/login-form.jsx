import React from 'react';
import classnames from 'classnames';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import ValidationMixin from 'react-validation-mixin';
import Loader from 'react-loader';
import Joi from 'joi';
import strategy from 'joi-validation-strategy';
import validation from 'react-validation-mixin';
import utils from '../../utils';
import UserActions from '../../actions/UserActions';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.renderHelpText = this.renderHelpText.bind(this);

		this.validatorTypes = {
			email: Joi.string().email().required(),
			password: Joi.string().required()
		};

		this.state = {
			email: null,
			password: null,
			loaded: true
		};
	}

	onSubmit(e) {
		e.preventDefault();

		const onValidate = (error) => {
			if (!error) {
				UserActions.loginUser(this.state.credentials);
				this.setState({ loaded: false });
			}
		};

		this.validate(onValidate);
	}

	getClasses(field) {
		return classnames({
			'form-group': true,
			'has-error': !this.props.isValid(field)
		});
	}

	handleReset(event) {
		event.preventDefault();
		this.clearValidations();
		this.setState(this.getInitialState());
	}

	renderHelpText(message) {
		return (
			<small ref='helpBlock' className="help-block">{message}</small>
		);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className="form-horizontal">
					<div className="row">
						<div className={this.getClasses.bind(this)}>
							<label className="col-xs-4 control-label" htmlFor='email'>Email</label>
							<div className="col-xs-7">
								<input
									id="email"
									ref="email"
									className="form-control email"
									type="email"
									placeholder="Obrigatório*"/>
							</div>
							{this.renderHelpText(this.props.getValidationMessages('email'))}
						</div>
						<div className={this.getClasses.bind(this)}>
							<label className="col-xs-4 control-label" htmlFor='password'>Password</label>
							<div className="col-xs-7">
								<input
									id="password"
									ref="password"
									className="form-control password"
									type="password"
									placeholder="Obrigatório*"/>
							</div>
							{this.renderHelpText(this.props.getValidationMessages('password'))}
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
}

export default validation(strategy)(LoginForm);