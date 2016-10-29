import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import GoogleMap from 'google-map-react'
import styles from './styles.scss'

export class RestaurantInfo extends React.Component {

    static propTypes = {
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired
    }

    render() {
        const center = {
            lat: parseFloat(this.props.lat),
            lng: parseFloat(this.props.lng)
        }

        return (
            <div styleName="rest-info">
                <h3>
                    Where to find us
                </h3>
                <div styleName="map">
                    <GoogleMap
                        bootstrapURLKeys= {{
                            key: 'AIzaSyBPiEkEaC6T3Q8w-mRtRuektEIjtFmJ-Lo'
                        }}
                        defaultCenter={center}
                        defaultZoom={9}>
                    </GoogleMap>
                </div>
                <h3>
                    Opening hours
                </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>8am</td>
                            <td>-</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>8am</td>
                            <td>-</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>8am</td>
                            <td>-</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>8am</td>
                            <td>-</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>8am</td>
                            <td>-</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>8am</td>
                            <td>-</td>
                            <td>6pm</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>8am</td>
                            <td>-</td>
                            <td>6pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    lat: state.restaurant.meta.location.latitude,
    lng: state.restaurant.meta.location.longitude
})

export default connect(mapStateToProps, null)(CSSModules(RestaurantInfo, styles))