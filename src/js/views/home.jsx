/** @jsx React.DOM */
define(function (require) {
	var React = require('react'),
		Link = require('react-router').Link;

	var Home = React.createClass({

		componentDidMount: function () {
			$(this.getDOMNode()).find('.home-bg').fadeTo('100', 1);
		},

	  	getInitialState: function() {
			return {postcode: 'none'};
	  	},

		onChange: function (event) {
			this.setState({postcode: event.target.value});
		},

		render: function () {
			var postcode = this.state.postcode;

		  	return (
		  		<div className="home-wrapper">
			  		<div className="home-top-wrapper">
						<div className="call-to-action-section">
							<div className="css-table-cell">
								<div className="icon">
									<img src="src/img/content/call-to-action-icon1.png" alt="" />
								</div>
							</div>
							<div className="text css-table">
								<div className="css-table-cell">
									<h4>Encomende comida online</h4>
									<p>Procure por takeaways perto de si</p>
								</div>
						  		<div className="main-postcode-search css-table-cell">
							  		<input className="pad-bottom form-control" onChange={this.onChange} type="text" placeholder="Insira o seu codigo postal" />
						  		</div>
						  		<div className="css-table-cell">
									<Link to="postcode" params={{pcode: postcode}} className="btn btn-default-red-inverse pad-top">
										Procure um takeaway
									</Link>
								</div>
							</div>
						</div>
						<div className="home-bg ms-skin-black-2 round-skin" id="masterslider">
							<div className="ms-view">
								<img src="src/img/japanese_ramen.jpg" alt="" />
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

	return Home;
});