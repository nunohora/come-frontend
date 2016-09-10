import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class ResultNumber extends React.Component {

    static propTypes = {
        number: PropTypes.number,
        postcode: PropTypes.string.isRequired
    }

    render() {
        return (
            <span className="input-lh">
            	{this.props.number} resultados para {this.props.postcode}
            	<Link to="" > (change location?) </Link>
        	</span>
        );
    }
}