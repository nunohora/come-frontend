import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getRestaurantMenu } from 'redux-store/modules/restaurant'
import Loader from 'react-loader'
import MenuCategories from 'components/MenuCategories'
import RestaurantHeader from 'components/RestHeader'
import ShoppingCart from 'containers/ShoppingCart'

class Restaurant extends React.Component {

    static propTypes = {
        getRestaurantMenu: PropTypes.func.isRequired,
        menuCategories: PropTypes.array.isRequired,
        meta: PropTypes.object.isRequired,
        menu: PropTypes.array.isRequired,
        id: PropTypes.string.isRequired,
        path: PropTypes.string
    }

    constructor(props) {
        super(props)
        this.renderClasses.bind(this)
        this.getUrl.bind(this)
    }

    componentWillMount() {
        this.props.getRestaurantMenu(this.props.id)
    }

    renderClasses(name) {
        return classnames({
            'active': name === this.props.path
        })
    }

    getUrl() {
        const { props: { params: { id, slug }}} = this

        return `/places/${id}/${slug}`
    }

    render() {
        const { props: { params } } = this

        return (
            <div className="container">
                <Loader loaded={!this.props.isFetching} className="spinner"></Loader>
                <div className="col-md-3">
                    <MenuCategories categories={this.props.menuCategories} path={this.getUrl()} />
                </div>
                <div className="col-md-6">
                    <RestaurantHeader meta={this.props.meta} />
                    <ul className="nav nav-tabs" role="tablist">
                        <li className={this.renderClasses('menu')} >
                            <Link activeClassName="active" to={`/places/${params.id}/${params.slug}`} role="tab">Menu</Link>
                        </li>
                        <li className={this.renderClasses('reviews')}>
                            <Link to={`${this.getUrl()}/reviews`} role="tab">Reviews</Link>
                        </li>
                        <li className={this.renderClasses('info')}>
                            <Link to={`${this.getUrl()}/info`} role="tab">Informação</Link>
                        </li>
                    </ul>
                    {this.props.children}
                </div>
                <div className="col-md-3">
                    <ShoppingCart />
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
    getRestaurantMenu: (id) => { getRestaurantMenu(dispatch, id) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)