import $ from 'jquery';
import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import Joi from 'joi';
import classnames from 'classnames';
import History from 'history';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.validatorTypes = { postcode: Joi.string().regex(/[0-9]{4}-[0-9]{3}/).required() };
		this.getValidatorData = this.getValidatorData.bind(this);
		this.renderHelpText = this.renderHelpText.bind(this);
		this.getClasses = this.getClasses.bind(this);

		this.state = {postcode: ''};
	}

	onSubmit(e) {
		const onValidate = error => {
			if (!error) {
				this.setState({ loaded: false });
				//this.props.history.pushState(null, `/search/${this.state.postcode}`);
			}
		};

		this.props.validate(onValidate.bind(this));
	}

	getValidatorData() {
		return {
			postcode: ReactDOM.findDOMNode(this.refs.postcode).value
		};
	}

	getClasses() {
		return classnames({
			'postcode-input': true,
			'has-error': false
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
			<div className="home-wrapper">
				<div className="home-top-wrapper">
					<div className="call-to-action-section">
						<div className="css-table-cell">
							<div className="icon">
								<img src="build/img/content/call-to-action-icon1.png" alt="" />
							</div>
						</div>
						<form className="text css-table" onSubmit={this.onSubmit.bind(this)}>
							<div className="css-table-cell">
								<h4>Encomende comida online</h4>
								<p>Procure por takeaways perto de si</p>
							</div>
							<div className="main-postcode-search css-table-cell">
								<div className={this.getClasses('postcode')}>
									<div>
										<input
											onBlur={this.props.handleValidation('postcode')}
											ref="postcode"
											className="form-control"
											type="text"
											placeholder="Insira o seu codigo postal*"/>
									</div>
								</div>
								<button className="btn btn-default-red-inverse submit-postcode"
										type="submit">
									Procure um takeaway
								</button>
							</div>
						</form>
					</div>
					<div className="home-bg">
						<div className="ms-layer ms-caption">
							<h1 className="text-right">
								<span>Tens fome?!</span>
								<br/>
								<span className="small">Come!</span>
							</h1>
						</div>
					</div>
				</div>
				<div className="order-steps text-center">
					<div className="container">
						<div className="row">
							<div className="col-md-3 col-sm-6 col-xs-6 text-center">
								<div className="order-step">
									<i className="fa fa-map-marker fa-4x"></i>
									<h6>1. Diga-nos onde está</h6>
									<div className="bl-sort">Só precisamos do seu código postal.</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 text-center">
								<div className="order-step">
									<i className="fa fa-cutlery fa-4x"></i>
									<h6>2. Escolha um takeaway</h6>
									<div className="bl-sort">O que lhe apetece comer?</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 text-center">
								<div className="order-step">
									<i className="fa fa-credit-card fa-4x"></i>
									<h6>3. Dinheiro ou cartão</h6>
									<div className="bl-sort">Aceitamos as duas formas de pagamento.</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-6 text-center">
								<div className="order-step">
									<i className="fa fa-thumbs-up fa-4x"></i>
									<h6>4. Já está</h6>
									<div className="bl-sort">A sua comida está a caminho!</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default validation(strategy)(Home);