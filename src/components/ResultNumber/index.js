import React, { PropTypes } from 'react'

export default class ResultNumber extends React.Component {

    static propTypes = {
        number: PropTypes.number,
        postcode: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="col-md-12">
                <h5>{this.props.number} resultados para {this.props.postcode}</h5>
            </div>
        );
    }
}