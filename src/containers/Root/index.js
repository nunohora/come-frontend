/* global require */
import React, { PropTypes } from 'react'
import { modules } from 'nuno-redux-store'
import { Provider } from 'react-redux'
import { Router, withRouter } from 'react-router'
import { IntlProvider } from 'react-intl'

const { translations } = modules

class Root extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        routes: PropTypes.element.isRequired,
        store: PropTypes.object.isRequired
    };

    get content() {
        return (
            <Router history={this.props.history}>
                {this.props.routes}
            </Router>
        )
    }

    render() {
        return (
            <IntlProvider
                locale="pt"
                messages={translations}>
                <Provider store={this.props.store}>
                    <div style={{ height: '100%' }}>
                        {this.content}
                    </div>
                </Provider>
            </IntlProvider>
        )
    }
}

export default withRouter(Root)