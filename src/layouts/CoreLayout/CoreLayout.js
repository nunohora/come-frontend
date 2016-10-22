import React, { PropTypes } from 'react'
import '../../styles/core.scss'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Header from 'containers/Header'
import Footer from 'components/Footer'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
export default class CoreLayout extends React.Component {

    static propTypes = {
        children: PropTypes.element
    }

    render() {
        const { props } = this

        let items = () => {
            return (
                <div key={props.children}>
                    {props.children}
                </div>
            )
        }

        return (
            <div>
                <Header routes={props.route} />
                <div className="main-container">
                    <section className="fullscreen">
                        <ReactCSSTransitionGroup
                            component="div"
                            className="container v-align-transform"
                            transitionName={{
                                enter: 'enter',
                                leave: 'leave',
                                appear: 'appear'
                            }}
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                        >
                            <div className="bg-holder"></div>
                            {items()}
                        </ReactCSSTransitionGroup>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}