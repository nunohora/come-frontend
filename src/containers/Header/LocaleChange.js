import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import ga from 'react-ga'
import { connect } from 'react-redux'
import { update } from 'react-intl-redux'
import { translations } from 'nuno-redux-store'
import styles from './styles.scss'

class LocaleChange extends React.Component {

    static propTypes = {
        locale: PropTypes.string
    }

    changeLocale(newLocale) {
        this.props.changeLocale(newLocale, translations[newLocale])
        ga.event({ category: 'TopBar', action: 'Locale Change', value: newLocale})
    }

    getClasses(locale) {
        return classNames({
            'hide': locale === this.props.locale
        })
    }

    render() {
        return (
            <div className="container">
                <a styleName="locale-change"
                   className={this.getClasses('pt')}
                   onClick={this.changeLocale.bind(this, 'pt')}>
                    Português
                </a>
                <a styleName="locale-change"
                   className={this.getClasses('en')}
                   onClick={this.changeLocale.bind(this, 'en')}>
                    English
                </a>
            </div>
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