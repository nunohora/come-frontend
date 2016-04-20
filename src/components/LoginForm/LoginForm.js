import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import Joi from 'joi'
import { loginUser } from 'redux/modules/user'
import strategy from 'joi-validation-strategy'
import validation from 'react-validation-mixin'

class LoginForm extends React.Component {

    static propTypes = {
        isValid: PropTypes.func.isRequired,
        getValidationMessages: PropTypes.func.isRequired,
        validate: PropTypes.func.isRequired,
        loginUser: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.renderHelpText = this.renderHelpText.bind(this)
        this.getClasses = this.getClasses.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.getValidatorData = this.getValidatorData.bind(this)

        this.validatorTypes = {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }

        this.state = {
            email: null,
            password: null,
            loaded: true
        }
    }

    getValidatorData() {
        return {
            email: ReactDOM.findDOMNode(this.refs.email).value,
            password: ReactDOM.findDOMNode(this.refs.password).value
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const onValidate = (error) => {
            if (!error) {
                this.props.loginUser(this.state.credentials);
                this.setState({ loaded: false });
            }
        };

        this.props.validate(onValidate);
    }

    getClasses(field) {
        return classnames({
            'form-group': true,
            'has-error': !this.props.isValid(field)
        });
    }

    handleReset(event) {
        event.preventDefault();
        this.props.clearValidations();
        this.setState(this.getInitialState());
    }

    renderHelpText(message) {
        return (
            <small ref='helpBlock' className="help-block">{message}</small>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form-horizontal">
                    <div className="row">
                        <div className={this.getClasses}>
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
                        <div className={this.getClasses}>
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
                        <div className="text-center">
                            <button type="submit"
                                    className="btn btn-default-red-inverse">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
                <Loader loaded={this.state.loaded} className="spinner"></Loader>
            </div>
        );
    }
}

const Login = connect(null, {
    loginUser
})(LoginForm)

export default validation(strategy)(Login);