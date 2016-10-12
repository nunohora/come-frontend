import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

class ResultNumber extends React.Component {

    static propTypes = {
        number: PropTypes.number,
        postcode: PropTypes.string.isRequired
    }

    render() {
        return (
            <span className="input-lh" styleName="results">
            	<strong>{this.props.number}</strong>&nbsp;
                <FormattedMessage id="RESULTS_FOR" />&nbsp;
                <strong>{this.props.postcode}</strong>
                 &nbsp;
                <Link to="" >
                    (<FormattedMessage id="CHANGE_LOCATION?" />)
                </Link>
        	</span>
        );
    }
}

export default CSSModules(ResultNumber, styles)