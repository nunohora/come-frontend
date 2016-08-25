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
            <div className="row normal-container">
                <div className="col-md-3 hidden-sm">
                    <MenuCategories categories={this.props.menuCategories} path={this.getUrl()} />
                </div>
                <div className="col-md-5">
                    <RestaurantHeader meta={this.props.meta} />
                    <div className="tabbed-content button-tabs">
                        <ul className="tabs">
                            <li className={this.renderClasses('menu')}>
                                <div className="tab-title">
                                    <Link to={`/places/${params.id}/${params.slug}`} role="tab">Menu</Link>
                                </div>
                            </li>
                            <li className={this.renderClasses('reviews')}>
                                <div className="tab-title">
                                    <Link to={`${this.getUrl()}/reviews`} role="tab">Reviews</Link>
                                </div>
                            </li>
                            <li className={this.renderClasses('info')}>
                                <div className="tab-title">
                                    <Link to={`${this.getUrl()}/info`} role="tab">Informação</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        {this.props.children}           
                    </div>
                </div>
                <div className="col-md-3 hidden-sm">
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