import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import classnames from 'classnames'
import Loader from 'react-loader'
import { loginUser } from 'redux/modules/user'

const fields = ['email', 'password']

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Campo Obrigatório'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }

    if (!values.password) {
        errors.password = 'Campo Obrigatório'
    }
}

class LoginForm extends React.Component {

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
        loaded: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props)

        this.getClasses = this.getClasses.bind(this)
    }

    onKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        debugger
    }

    getClasses(field) {
        return classnames({
            'form-group': true,
            'has-error': !this.props.isValid(field)
        });
    }

    handleReset(event) {
        event.preventDefault()
        this.props.clearValidations()
    }

    renderHelpText(message) {
        return (
            <small ref='helpBlock' className="help-block">{message}</small>
        )
    }

    render() {
        const { fields: { email, password }, handleSubmit } = this.props

        return (
            <div>
                <form onSubmit={handleSubmit} className="form-horizontal">
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
                            { email.touched && email.error && <small ref='helpBlock' className="help-block">
                                { email.error }</small>
                            }
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
                            { password.touched && password.error && <small ref='helpBlock' className="help-block">
                                { password.error }</small>
                            }
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

export default reduxForm({
    form: 'LoginForm',
    fields,
    validate
}, null, {
    loginUser: () => (loginUser(dispatch, credentials))
})(LoginForm)