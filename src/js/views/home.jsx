/** @jsx React.DOM */
var $ 	        = require('jquery'),
	React       = require('react'),
	Formsy      = require('formsy-react'),
	FormsyInput = require('views/helpers/input'),
	Link        = require('react-router').Link;

var isPostcode = {
	regexp: /[0-9]{4}-[0-9]{3}/,
	message: 'O código postal tem que estar no formato XXXX-xxx'
};

Formsy.addValidationRule('isPostcode', function (value) {
	return isPostcode.regexp.test(value);
});

var Home = React.createClass({

	componentDidMount: function () {
		$(this.getDOMNode()).find('.home-bg').fadeTo('100', 1);
	},

  	getInitialState: function() {
		return {location: ''};
  	},

	handleChange: function (values) {
		this.setState({location: values.Postcode});
	},

	onSubmit: function () {},

	enableButton: function () {
	    this.setState({ canSubmit: true });
	},

	disableButton: function () {
	    this.setState({ canSubmit: false });
	},

	render: function () {
		var location = this.state.location;

	  	return (
	  		<div className="home-wrapper">
		  		<div className="home-top-wrapper">
					<div className="call-to-action-section">
						<div className="css-table-cell">
							<div className="icon">
								<img src="img/content/call-to-action-icon1.png" alt="" />
							</div>
						</div>
						<Formsy.Form className="text css-table"
							onSubmit={this.onSubmit}
							onChange={this.handleChange}
							onValid={this.enableButton}
							onInvalid={this.disableButton}>
							<div className="css-table-cell">
								<h4>Encomende comida online</h4>
								<p>Procure por takeaways perto de si</p>
							</div>
					  		<div className="main-postcode-search css-table-cell">
	  							<FormsyInput wrapperClassName="postcode-input"
									noLabel={true}
									inputClassName="form-control"
									name="Postcode"
									type="text"
									placeholder="Insira o seu codigo postal*"
									validations="isPostcode"
									validationError={isPostcode.message}
									required />
					  		</div>
					  		<div className="css-table-cell">
								<Link to="search" params={{location: location}}>
									<button className="btn btn-default-red-inverse pad-top"
										type="submit"
										disabled={!this.state.canSubmit}>
										Procure um takeaway
									</button>
								</Link>
							</div>
						</Formsy.Form>
					</div>
					<div className="home-bg ms-skin-black-2 round-skin" id="masterslider">
						<div className="ms-view">
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

module.exports = Home;