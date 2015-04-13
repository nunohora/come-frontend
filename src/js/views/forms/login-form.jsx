/** @jsx React.DOM */
var React  = require('react'),
	Formsy = require('formsy-react'),
	utils  = require('utils'),
	$ 	   = require('jquery');

var FormsyInput = React.createClass({

	mixins: [Formsy.Mixin],

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    changeValue: function (event) {
      this.setValue(event.currentTarget.value);
    },

    render: function () {
    	var error = this.getErrorMessage(),
      		formId = "form-" + this.props.name,
      		message = '',
      		className = 'form-group ';

  		if (error) {
  			className += 'has-error';
  		}
  		else if (this.isValid()) {
  			className += 'has-success';
  		}

  		return (
	        <div className={className}>
	        	<label className="col-xs-4 control-label"
	        		htmlFor={formId}>{this.props.name}</label>
	        	<div className="col-xs-7">
		        	<input
		          		id={formId}
		          		className="form-control"
		          		type="text"
		          		onChange={this.changeValue}
		          		placeholder={this.props.placeholder}
		          		value={this.getValue()} />
	          		<small className="help-block">{error}</small>
	        	</div>
	        </div>
  		);
    }
});

module.exports = React.createClass({

	getInitialState: function () {
		return { canSubmit: false };
	},

	submitForm: function (e) {
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

	render: function () {
	  	return (
			<Formsy.Form className="form-horizontal"
				onValid={this.enableButton}
				onInvalid={this.disableButton} >
				<div className="row">
					<div>
						<FormsyInput
							name="Email"
							onChange={this.handleChange}
							type="email"
							validations="isEmail"
							validationError="Email inválido"
							placeholder="Obrigatório*"
							required />

						<FormsyInput
							name="Password"
							onChange={this.handleChange}
							type="password"
							validations="isValue"
							validationError="This is not a valid email"
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
				</div>
			</Formsy.Form>
		);
	}
});