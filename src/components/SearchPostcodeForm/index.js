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
        errors.postcode = 'Required'
    } 
    else if (!/[0-9]{4}-[0-9]{3}/.test(values.postcode)) {
        errors.postcode = 'Invalid postcode'
    }

    return errors
}


const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <input 
                {...input} 
                placeholder={label} 
                type={type} 
                className={classNames({ 'field-error': touched && error })}
                />
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

        console.log('ERROR: ', this.props)

        return (
            <form className="halves" onSubmit={handleSubmit} onKeyPress={this.onKeyPress.bind(this)}>
                <Field name="postcode" type="text" component={renderField} label="Postcode" />
                <button onClick={handleSubmit} className="mb16 btn" type="submit">
                    <FaSearch size={20} styleName="icon" />
                    <FormattedMessage id="PROCURAR_LOCAIS" tagName="span" />
                </button>
            </form>
        )
    }
}

const cssModules = CSSModules(SearchPostcodeForm, styles)

export default reduxForm({
    form: 'searchByPostcode',
    validate
})(cssModules)