import React, { PropTypes } from 'react'
import RestaurantListItem from 'components/RestListItem'

export default class RestaurantList extends React.Component {

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                {this.props.list.map(rest => (
                    <RestaurantListItem 
                        key={rest.id}
                        id={rest.id}
                        name={rest.name}
                        address={rest.zone_name}
                        categories={rest.food_categories}
                        slug = {rest.slug} />
                ))}
            </div>
        )
    }
}