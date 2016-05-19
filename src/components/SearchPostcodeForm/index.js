import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import formValidation from './FormValidation'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './SearchPostcodeForm.scss'

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
            <div styleName="postcode-text" className="css-table">
                <div className="css-table-cell">
                    <h4>Encomende comida online</h4>
                    <p>Procure por takeaways perto de si</p>
                </div>
                <div styleName="main-postcode-search" className="css-table-cell">
                    <form onSubmit={handleSubmit} onKeyPress={this.onKeyPress.bind(this)}>
                        <div styleName={this.getClasses('postcode ')}>
                            <input
                                ref="postcode"
                                className="form-control"
                                type="text"
                                placeholder="Insira o seu codigo postal*"
                                {...postcode} />

                            { postcode.touched && postcode.error && <small ref='helpBlock' className="help-block">
                                { postcode.error }</small>
                            }
                        </div>
                        <button styleName="submit-postcode"
                                className="btn btn-default-red-inverse"
                                onClick={handleSubmit}
                                type="submit">
                            Procure um takeaway
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const cssModules = CSSModules(SearchPostcodeForm, styles)

export default reduxForm({
    form: 'SearchPostcodeForm',
    fields,
    validate: formValidation
})(cssModules)