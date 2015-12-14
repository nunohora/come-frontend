import $ from 'jquery';
import React from 'react';
import { Navigation, Link } from 'react-router';
//import LinkedStateMixin from 'react-addons-linked-state-mixin';
//import ValidationMixin from 'react-validation-mixin';
import Joi from 'joi';

module.exports = React.createClass({

	validatorTypes: {
		postcode: Joi.string().regex(/[0-9]{4}-[0-9]{3}/).required()
	},

	componentDidMount() {
		$(this.getDOMNode()).find('.home-bg').fadeTo('100', 1);
	},

  	getInitialState() {
		return {postcode: ''};
  	},

	onSubmit(e) {
		const onValidate = (error, validationErrors) => {
			console.log(validationErrors);
			if (!error) {
				this.setState({ loaded: false });
				this.transitionTo('search', {location: this.state.postcode});
			}
		};

		this.validate(onValidate);
	},

	getClasses(field) {
		return React.addons.classSet({
			'postcode-input': true,
			'has-error': !this.isValid(field)
		});
	},

	handleReset(event) {
		event.preventDefault();
		this.clearValidations();
		this.setState(this.getInitialState());
	},

	renderHelpText(message) {
		return (
			<small ref='helpBlock' className="help-block">{message}</small>
		);
	},

	render() {
	  	return (
	  		<div className="home-wrapper">
		  		<div className="home-top-wrapper">
					<div className="call-to-action-section">
						<div className="css-table-cell">
							<div className="icon">
								<img src="img/content/call-to-action-icon1.png" alt="" />
							</div>
						</div>
						<form className="text css-table" onSubmit={this.onSubmit}>
							<div className="css-table-cell">
								<h4>Encomende comida online</h4>
								<p>Procure por takeaways perto de si</p>
							</div>
					  		<div className="main-postcode-search css-table-cell">
								<div className={this.getClasses('postcode')}>
									<div>
										<input
											onBlur={this.handleValidation('postcode')}
											valueLink={this.linkState('postcode')}
											ref="postcode"
											className="form-control"
											type="text"
											placeholder="Insira o seu codigo postal*"/>
									</div>
									{this.getValidationMessages('postcode').map(this.renderHelpText)}
								</div>
									<button className="btn btn-default-red-inverse submit-postcode"
											type="submit">
										Procure um takeaway
									</button>
					  		</div>
						</form>
					</div>
					<div className="home-bg">
						<img src="img/japanese_ramen.jpg" alt="" />
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
});