import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Joi from 'joi'
import strategy from 'joi-validation-strategy'
import validation from 'react-validation-mixin'

class SignupForm extends React.Component {

    static propTypes = {
        isValid: PropTypes.func.isRequired,
        getValidationMessages: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)
        this.renderHelpText = this.renderHelpText.bind(this)

        this.validatorTypes = {
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
            confirmPassword: Joi.string().required(),
            fullName: Joi.string().required(),
            phoneNo: Joi.number().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            postcode: Joi.string().required()
        }

        this.state = {
            canSubmit: false
        }
    }

    handleClick(e) {
        e.preventDefault()
    }

    handleChange(e) {
        var state = {}

        state[e.target.name] = e.target.value
        this.setState(state)
    }

    renderHelpText(message) {
        return (
            <small ref='helpBlock' className="help-block">{message}</small>
        );
    }

    enableButton() {
        this.setState({
            canSubmit: true
        })
    }

    disableButton() {
        this.setState({
            canSubmit: false
        })
    }

    getClasses(field) {
        return classnames({
            'form-group': true,
            'has-error': !this.props.isValid(field)
        })
    }

    render() {
        return (
            <form className="form-horizontal"
                  onValid={this.enableButton}
                  onInvalid={this.disableButton}>
                <div className="row">
                    <div className={this.getClasses.bind(this)}>
                        <label className="col-xs-4 control-label" htmlFor='email'>Email</label>
                        <div className="col-xs-7">
                            <input
                                id="email"
                                ref="email"
                                className="form-control email"
                                type="email"
                                placeholder="Obrigatório*"/>
                        </div>
                        {this.renderHelpText(this.props.getValidationMessages('email'))}
                    </div>
                    <div className={this.getClasses.bind(this)}>
                        <label className="col-xs-4 control-label" htmlFor='password'>Password</label>
                        <div className="col-xs-7">
                            <input
                                id="password"
                                ref="password"
                                className="form-control password"
                                type="password"
                                placeholder="Obrigatório*"/>
                        </div>
                        {this.renderHelpText(this.props.getValidationMessages('password'))}
                    </div>
                    <div className={this.getClasses.bind(this)}>
                        <label className="col-xs-4 control-label" htmlFor='confirm_password'>Confirm Password</label>
                        <div className="col-xs-7">
                            <input
                                id="confirm_password"
                                ref="password"
                                className="form-control password"
                                type="password"
                                placeholder="Obrigatório*"/>
                        </div>
                        {this.renderHelpText(this.props.getValidationMessages('password'))}
                    </div>
                    <div className={this.getClasses.bind(this)}>
                        <label className="col-xs-4 control-label" htmlFor='full_name'>Nome Completo</label>
                        <div className="col-xs-7">
                            <input
                                id="full_name"
                                ref="full_name"
                                className="form-control"
                                type="text"
                                placeholder="Obrigatório*"/>
                        </div>
                        {this.renderHelpText(this.props.getValidationMessages('fullName'))}
                    </div>
                    <div className={this.getClasses.bind(this)}>
                        <label className="col-xs-4 control-label" htmlFor='phone_number'>Número telefone</label>
                        <div className="col-xs-7">
                            <input
                                id="phone_number"
                                ref="phone_number"
                                className="form-control"
                                type="number"
                                placeholder="Obrigatório*"/>
                        </div>
                        {this.renderHelpText(this.props.getValidationMessages('phoneNumber'))}
                    </div>
                    <div className={this.getClasses.bind(this)}>
                        <label className="col-xs-4 control-label" htmlFor='address'>Morada</label>
                        <div className="col-xs-7">
                            <input
                                id="address"
                                ref="address"
                                className="form-control"
                                type="text"
                                placeholder="Obrigatório*"/>
                        </div>
                        {this.renderHelpText(this.props.getValidationMessages('address'))}
                    </div>
                    <div className={this.getClasses.bind(this)}>
                        <label className="col-xs-4 control-label" htmlFor='city'>Cidade</label>
                        <div className="col-xs-7">
                            <input
                                id="city"
                                ref="city"
                                className="form-control"
                                type="text"
                                placeholder="Obrigatório*"/>
                        </div>
                        {this.renderHelpText(this.props.getValidationMessages('city'))}
                    </div>
                    <div className={this.getClasses.bind(this)}>
                        <label className="col-xs-4 control-label" htmlFor='postcode'>Código Postal</label>
                        <div className="col-xs-7">
                            <input
                                id="postcode"
                                ref="postcode"
                                className="form-control"
                                type="text"
                                placeholder="Obrigatório*"/>
                        </div>
                        {this.renderHelpText(this.props.getValidationMessages('postcode'))}
                    </div>

                    <div className="text-center">
                        <button type="submit"
                                className="btn btn-default-red-inverse">
                            Login
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <button className="btn btn-default-red-inverse">
                                Continuar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default validation(strategy)(SignupForm);