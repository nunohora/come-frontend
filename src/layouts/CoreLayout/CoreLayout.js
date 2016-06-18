import React, { PropTypes } from 'react'
import '../../styles/core.scss'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from 'containers/Header'
import Footer from 'containers/Footer'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout({ route, children }) {
    return (
        <div>
            <Header routes={route} />
            <ReactCSSTransitionGroup
                className="page-content"
                transitionName="page-transition"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {children}
            </ReactCSSTransitionGroup>
            <Footer />
        </div>
    )
}

CoreLayout.propTypes = {
    children: PropTypes.element
}

export default CoreLayout
