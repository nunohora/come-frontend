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

    let items = () => {
        return (
            <div key={children}>
                {children}
            </div>
        )
    }

    return (
        <div>
            <Header routes={route} />
            <div className="main-container">
                <section className="fullscreen image-bg">
                    <ReactCSSTransitionGroup
                        component="div"
                        className="container v-align-transform"
                        transitionName={{
                            enter: 'enter',
                            leave: 'leave',
                            appear: 'appear'
                        }}
                        transitionAppear={true}
                        transitionAppearTimeout={1500}
                        transitionEnterTimeout={1500}
                        transitionLeaveTimeout={1500}>
                        <div className="bg-holder"></div>
                        {items()}
                    </ReactCSSTransitionGroup>
                </section>
            </div>
            <Footer />
        </div>
    )
}

CoreLayout.propTypes = {
    children: PropTypes.element
}

export default CoreLayout
