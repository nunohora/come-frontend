import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

let TiArrowLeft = require('react-icons/lib/ti/arrow-left')

class GoBackButton extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="col-md-12" styleName="breadcrumbs">
                <Link to={this.props.to}>
                    <TiArrowLeft size={30} />
                        Back to {this.props.text}
                </Link>
            </div>
        )
    }
}

export default CSSModules(GoBackButton, styles)