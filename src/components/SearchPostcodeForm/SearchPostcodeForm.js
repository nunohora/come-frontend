import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import validation from 'react-validation-mixin'
import strategy from 'joi-validation-strategy'
import Joi from 'joi'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './SearchPostcodeForm.scss'

class SearchPostcodeForm extends React.Component {

    static propTypes = {
        validate: PropTypes.func.isRequired,
        handleValidation: PropTypes.func.isRequired,
        getValidationMessages: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.validatorTypes = {
            postcode: Joi.string().regex(/[0-9]{4}-[0-9]{3}/).required()
        }

        this.getValidatorData = this.getValidatorData.bind(this);
        this.renderHelpText = this.renderHelpText.bind(this);
        this.getClasses = this.getClasses.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { postcode: '' };
    }

    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.onSubmit(e);
        }
    }

    onSubmit(e) {
        e.preventDefault()

        const onValidate = (error) => {
            if (!error) {
                let postcode = ReactDOM.findDOMNode(this.refs.postcode).value

                this.setState({
                    loaded: false,
                    postcode: postcode
                })

                browserHistory.push(`/search/${postcode}`)
            }
        };

        this.props.validate(onValidate.bind(this));
    }

    getValidatorData() {
        return {
            postcode: ReactDOM.findDOMNode(this.refs.postcode).value
        };
    }

    getClasses() {
        return classnames({
            'postcode-input': true,
            'has-error': false
        });
    }

    handleReset(event) {
        event.preventDefault();
        this.clearValidations();
    }

    renderHelpText(message) {
        return (
            <small ref='helpBlock' className="help-block">{message}</small>
        );
    }

    render() {
        return (
            <div styleName="postcode-text" className="css-table">
                <div className="css-table-cell">
                    <h4>Encomende comida online</h4>
                    <p>Procure por takeaways perto de si</p>
                </div>
                <div styleName="main-postcode-search" className="css-table-cell">
                    <form onSubmit={this.onSubmit} onKeyPress={this.onKeyPress.bind(this)}>
                        <div styleName={this.getClasses('postcode')}>
                            <input
                                onBlur={this.props.handleValidation('postcode')}
                                ref="postcode"
                                className="form-control"
                                type="text"
                                placeholder="Insira o seu codigo postal*"/>
                            {this.renderHelpText(this.props.getValidationMessages('postcode'))}
                        </div>
                        <button styleName="submit-postcode" className="btn btn-default-red-inverse"
                                type="submit">
                            Procure um takeaway
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default validation(strategy)(CSSModules(SearchPostcodeForm, styles))