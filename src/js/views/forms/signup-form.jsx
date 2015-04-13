/** @jsx React.DOM */
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

    displayErrorMessage: function (error) {
    	return (
    		<i className="form-control-feedback glyphicon glyphicon-remove"
    			data-fv-icon-for="username"></i>
    		)
    },

    render: function () {
    	var errorMessage = this.getErrorMessage(),
      		formId = "form-" + this.props.name;

  		return (
	        <div className="form-group">
	        	<label className="col-xs-4 control-label"
	        		htmlFor={formId}>{this.props.name}</label>
	        	<div className="col-xs-7">
		        	<input
		          		id={formId}
		          		className="form-control"
		          		type="text"
		          		hasFeedback
		          		onChange={this.changeValue}
		          		value={this.getValue()} />
	        	</div>
	        </div>
  		);
    }
});

module.exports = React.createClass({

	handleClick: function (e) {
		e.preventDefault();
	},

	handleChange: function (e) {
		var state = {};

		state[e.target.name] = e.target.value;
		this.setState(state);
	},

	render: function () {
	  	return (
			<Formsy.Form className="form-horizontal">
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
							<button className="btn btn-default-red-inverse" onClick={this.handleClick}>
								Registar-se
							</button>
						</div>
					</div>
				</div>
			</Formsy.Form>
		);
	}
});