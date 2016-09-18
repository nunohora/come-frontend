import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import styles from './styles.scss'

class Breadcrumbs extends React.Component {
    render() {
        return (
            <ol styleName="breadcrumbs">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Elements</a>
                </li>
                <li className="active">Pricing Tables</li>
            </ol>
        )
    }
}

export default CSSModules(Breadcrumbs, styles)