/** @jsx React.DOM */
var React       = require('react'),
	Loader      = require('react-loader'),
	Formsy      = require('formsy-react'),
	FormsyInput = require('views/helpers/input'),
	utils       = require('utils'),
	$ 	        = require('jquery');

module.exports = React.createClass({

	getInitialState: function () {
		return {
			canSubmit: false,
			loaded: true
		};
	},

	submitForm: function (e) {
		e.preventDefault();

		this.setState({loaded: false});

		$.when(utils.loginUser(this.state.email, this.state.password), function (result) {
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

	handleChange: function (e) {
		var state = {};

		state[e.target.name] = e.target.value;
		this.setState(state);
	},

	enableButton: function () {
	    this.setState({
	      canSubmit: true
	    });
	},

	disableButton: function () {
	    this.setState({
	      canSubmit: false
	    });
	},

	onSubmit: function () {
		this.setState({ loaded: false });
	},

	render: function () {
	  	return (
	  		<div>
	  		<Formsy.Form className="form-horizontal"
				url="/api/login"
				onSubmit={this.onSubmit}
				onValid={this.enableButton}
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
						<button
							type="submit"
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