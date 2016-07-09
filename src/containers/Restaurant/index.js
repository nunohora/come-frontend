import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getRestaurant } from 'redux-store/modules/restaurant'
import Loader from 'react-loader'
import MenuCategories from 'components/MenuCategories'
import RestaurantHeader from 'components/RestHeader'
import RestaurantMenu from 'components/RestMenu'

class Restaurant extends React.Component {

    static propTypes = {
        getRestaurant: PropTypes.func.isRequired,
        menuCategories: PropTypes.array.isRequired,
        meta: PropTypes.object.isRequired,
        menu: PropTypes.array.isRequired,
        id: PropTypes.string.isRequired,
        path: PropTypes.string
    }

    componentWillMount() {
        this.props.getRestaurant(this.props.id)
    }

    renderClasses(name) {
        return classnames({
            'active': name === this.props.path
        })
    }

    render() {
        const { props } = this

        return (
            <div className="container">
                <Loader loaded={!props.isFetching} className="spinner"></Loader>
                <div className="col-md-3">
                    <MenuCategories categories={props.menuCategories} />
                </div>
                <div className="col-md-6">
                    <RestaurantHeader meta={props.meta} />
                    <ul className="nav nav-tabs" role="tablist">
                        <li className={this.renderClasses('menu')} >
                            <Link to="" role="tab">Menu</Link>
                        </li>
                        <li className={this.renderClasses('reviews')}>
                            <Link to="reviews" role="tab">Reviews</Link>
                        </li>
                        <li className={this.renderClasses('info')}>
                            <Link to="info" role="tab">Informação</Link>
                        </li>
                    </ul>
                    <RestaurantMenu list={props.menu} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    menuCategories: state.restaurant.menuCategories,
    menu: state.restaurant.menu,
    meta: state.restaurant.meta,
    id: props.params.id,
    path: props.route.path
})

const mapDispatchToProps= (dispatch) => ({
    getRestaurant: (id) => { getRestaurant(dispatch, id) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)