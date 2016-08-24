import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import ga from 'react-ga'
import { connect } from 'react-redux'
import { update } from 'react-intl-redux'
import { translations } from 'redux-store'
import styles from './styles.scss'

let TiChevronLeft = require('react-icons/lib/ti/chevron-left')

class LocaleChange extends React.Component {

    static propTypes = {
        locale: PropTypes.string
    }

    changeLocale(newLocale) {
        this.props.changeLocale(newLocale, translations[newLocale])
        ga.event({ category: 'TopBar', action: 'Locale Change', value: newLocale})
    }

    getClasses(locale) {
        return classNames({ 'hide': locale === this.props.locale })
    }

    render() {
        return (
            <ul styleName="menu">
                <li className="has-dropdown toggle-sub">
                    <a>{this.props.locale}</a>
                    <TiChevronLeft size={20} styleName="dropdown-arrow" />
                    <ul styleName="dropdown-menu">
                        <li>
                            <a onClick={this.changeLocale.bind(this, 'en')}>
                                English
                            </a>
                        </li>
                        <li>
                            <a onClick={this.changeLocale.bind(this, 'pt')}>
                                Português
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        locale: state.intl.locale
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeLocale: (locale, messages) => { dispatch(update({ locale, messages })) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(LocaleChange, styles))