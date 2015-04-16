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

    getLabel: function (formId) {
      return (
        <label className={this.props.labelClassName} htmlFor={formId}>
          {this.props.name}
        </label>
      );
    },

    render: function () {
    	var error = this.getErrorMessage(),
      		formId = "form-" + this.props.name,
          label,
          wrapperClassName = this.props.wrapperClassName || '',
          inputWrapperClassName = this.props.inputWrapperClassName || '';

  		if (error) {
  			wrapperClassName += ' has-error';
  		}
  		else if (this.isValid()) {
  			wrapperClassName += ' has-success';
  		}

      label = !this.props.noLabel ? this.getLabel(formId) : '';

  		return (
	        <div className={wrapperClassName}>
	        	{label}
	        	<div className={inputWrapperClassName}>
		        	<input
		          		id={formId}
		          		className={this.props.inputClassName}
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