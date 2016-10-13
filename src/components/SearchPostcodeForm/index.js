import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormattedMessage } from 'react-intl'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

let FaSearch = require('react-icons/lib/fa/search')

const validate = values => {
    const errors = {}

    if (!values.postcode) {
        errors.postcode = 'ERROR_REQUIRED_POSTCODE'
    }
    else if (!/[0-9]{4}-[0-9]{3}/.test(values.postcode)) {
        errors.postcode = 'ERROR_INVALID_POSTCODE'
    }

    return errors
}


const renderField = ({ handleSubmit, input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <input
                    {...input}
                    placeholder={label}
                    type={type}
                    className={classNames({ 'field-error': touched && error })}
                    />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <button onClick={handleSubmit} className="mb16 btn" type="submit">
                    <FaSearch size={20} />
                    <FormattedMessage id="PROCURAR_LOCAIS" tagName="span" />
                </button>
            </div>
            {touched && error && <div className="form-error"><FormattedMessage id={error} /></div>}
        </div>
    )
}

class SearchPostcodeForm extends React.Component {

    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.handleSubmit(e)
        }
    }

    render() {
        const { error, handleSubmit, submitting } = this.props

        return (
            <form
                className="halves"
                styleName="search-form"
                onSubmit={handleSubmit}
                onKeyPress={this.onKeyPress.bind(this)}>
                <FormattedMessage id="POSTCODE">
                    {message => <Field
                        name="postcode"
                        type="text"
                        handleSubmit={handleSubmit}
                        component={renderField}
                        label={message} />}
                </FormattedMessage>
            </form>
        )
    }
}

const cssModules = CSSModules(SearchPostcodeForm, styles)

export default reduxForm({
    form: 'searchByPostcode',
    validate
})(cssModules)