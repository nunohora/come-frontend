var React  = require('react'),
	Formsy = require('formsy-react'),
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
		          		className="form-control input-large"
		          		type="text"
		          		hasFeedback
		          		onChange={this.changeValue}
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

	handleClick: function (e) {
		e.preventDefault();
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
				onInvalid={this.disableButton}>
				<div className="row">
					<div className="col-md-12">
						<FormsyInput
							name="Email"
							onChange={this.handleChange}
							type="email"
							validations="isEmail"
							validationError="This is not a valid email"
							placeholder="Email*"
							required />

						<FormsyInput
							name="Password"
							onChange={this.handleChange}
							type="password"
							validations="isEmail"
							validationError="This is not a valid email"
							placeholder="Password*"
							required />

						<FormsyInput
							name="Confirm password"
							onChange={this.handleChange}
							type="password"
							validations="isEmail"
							validationError="This is not a valid email"
							placeholder="Confirm password*"
							required />

						<FormsyInput
							name="Nome completo"
							onChange={this.handleChange}
							type="text"
							placeholder="Nome completo*"
							required />

						<FormsyInput
							name="Telemovel"
							onChange={this.handleChange}
							type="text"
							placeholder="telemovel*"
							required />

						<FormsyInput
							name="Morada"
							onChange={this.handleChange}
							type="text"
							placeholder="Morada*"
							required />

						<FormsyInput
							name="Cidade"
							onChange={this.handleChange}
							type="text"
							placeholder="Cidade*"
							required />

						<FormsyInput
							name="Codigo postal"
							onChange={this.handleChange}
							type="text"
							placeholder="Codigo postal*"
							required />

						<div className="text-center">
							<button className="btn btn-default-red-inverse"
								disabled={!this.state.canSubmit}
								onClick={this.handleClick}>
								Continuar
							</button>
						</div>
					</div>
				</div>
			</Formsy.Form>
		);
	}
});