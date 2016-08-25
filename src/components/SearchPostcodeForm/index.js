import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import formValidation from './FormValidation'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

let FaSearch = require('react-icons/lib/fa/search')

const fields = ['postcode']

class SearchPostcodeForm extends React.Component {

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.getClasses = this.getClasses.bind(this)
    }

    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.handleSubmit(e)
        }
    }

    getClasses() {
        return classnames({
            'postcode-input': true,
            'has-error': false
        })
    }

    handleReset(event) {
        event.preventDefault()
        this.clearValidations()
    }

    renderHelpText(message) {
        return (
            <small ref='helpBlock' className="help-block">{message}</small>
        )
    }

    render() {
        const { fields: { postcode }, handleSubmit } = this.props

        return (
            <form className="halves" onSubmit={handleSubmit} onKeyPress={this.onKeyPress.bind(this)}>
                <div>
                    <input
                        ref="postcode"
                        className="form-control"
                        type="text"
                        placeholder="Código postal*"
                        {...postcode} />
                </div>
                <button onClick={handleSubmit} className="mb16" type="submit">
                    <FaSearch size={20} styleName="icon" />
                    Procurar locais
                </button>
            </form>
        )
    }
}

const cssModules = CSSModules(SearchPostcodeForm, styles)

export default reduxForm({
    form: 'SearchPostcodeForm',
    fields,
    validate: formValidation
})(cssModules)