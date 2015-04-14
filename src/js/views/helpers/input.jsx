/** @jsx React.DOM */
var React  = require('react'),
  Loader = require('react-loader'),
  Formsy = require('formsy-react'),
  $      = require('jquery');

module.exports = React.createClass({

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
      		className = 'form-group ',
          labelClassName = "control-label " + this.props.labelClassName;

  		if (error) {
  			className += 'has-error';
  		}
  		else if (this.isValid()) {
  			className += 'has-success';
  		}

  		return (
	        <div className={className}>
	        	<label className={labelClassName}
	        		htmlFor={formId}>{this.props.name}</label>
	        	<div className={this.props.inputClassName}>
		        	<input
		          		id={formId}
		          		className="form-control"
		          		type={this.props.type}
		          		onChange={this.changeValue}
		          		placeholder={this.props.placeholder}
		          		value={this.getValue()} />
	          		<small className="help-block">{error}</small>
	        	</div>
	        </div>
  		);
    }
});