import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { update } from 'react-intl-redux'
import { translations } from 'nuno-redux-store'

class LocaleChange extends React.Component {
    changeLocale(newLocale) {
        this.props.changeLocale(newLocale, translations[newLocale])
    }

    render() {
        return (
            <div>
                <a onClick={this.changeLocale.bind(this, 'en')}>
                    English
                </a>
                <a onClick={this.changeLocale.bind(this, 'pt')}>
                    Portugues
                </a>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    changeLocale: (locale, messages) => { dispatch(update({ locale, messages })) }
})

export default connect(null, mapDispatchToProps)(LocaleChange)