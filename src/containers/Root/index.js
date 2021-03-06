/* global require */
import React, { PropTypes } from 'react'
import { Provider } from 'react-intl-redux'
import { Router, withRouter } from 'react-router'

class Root extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        routes: PropTypes.element.isRequired,
        store: PropTypes.object.isRequired
    };

    get content() {
        return (
            <Router history={this.props.history} routes={this.props.routes}>
                {this.props.routes}
            </Router>
        )
    }

    render() {
        return (
            <Provider store={this.props.store}>
                {this.content}
            </Provider>
        )
    }
}

export default withRouter(Root)