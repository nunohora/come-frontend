import React, { PropTypes } from 'react'
import RestaurantListItem from 'components/RestListItem'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

class RestaurantList extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    render() {
        return (
            <ul styleName="rest-list">
                {this.props.list.map(rest => (
                    <RestaurantListItem
                        key={rest.id}
                        id={rest.id}
                        name={rest.name}
                        address={`${rest.location.address} - ${rest.location.city}`}
                        categories={rest.food_categories}
                        rating={rest.rating}
                        reviewNumber={rest.num_reviews}
                        slug = {rest.slug} />
                ))}
            </ul>
        )
    }
}

export default CSSModules(RestaurantList, styles)