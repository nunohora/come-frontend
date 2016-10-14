import React, { PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getRestaurantMenu } from 'redux-store/modules/restaurant'
import Loader from 'react-loader'
import MenuCategories from 'components/MenuCategories'
import RestaurantHeader from 'components/RestHeader'
import ShoppingCart from 'containers/ShoppingCart'
import { FormattedMessage } from 'react-intl'

class Restaurant extends React.Component {

    static propTypes = {
        getRestaurantMenu: PropTypes.func.isRequired,
        menuCategories: PropTypes.array.isRequired,
        meta: PropTypes.object.isRequired,
        menu: PropTypes.object.isRequired,
        slug: PropTypes.string.isRequired,
        location: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        this.renderClasses.bind(this)
        this.getUrl.bind(this)
    }

    componentWillMount() {
        this.props.getRestaurantMenu(this.props.slug)
    }

    renderClasses(name) {
        const { pathname } = this.props.location
        const path = pathname.split('/')
        let string = path[path.length - 1]

        // Naughty hack!
        if (string !== 'reviews' && string !== 'info') string = 'menu'

        return classnames({
            'tab': true,
            'active': name === string
        })
    }

    getUrl() {
        return `/places/${this.props.params.slug}`
    }

    render() {
        const { props } = this

        return (
            <div className="row normal-container">
                <Loader loaded={!props.isFetching}>
                    <div className="col-md-3 hidden-sm">
                        <MenuCategories categories={props.menuCategories} path={this.getUrl()} />
                    </div>
                    <div className="col-md-6">
                        <RestaurantHeader meta={props.meta} />
                        <div className="button-tabs">
                            <div className={this.renderClasses('menu')}>
                                <Link to={`${this.getUrl()}`} role="tab"><FormattedMessage id="MENU" /></Link>
                            </div>
                            <div className={this.renderClasses('reviews')}>
                                <Link to={`${this.getUrl()}/reviews`} role="tab"><FormattedMessage id="REVIEWS" /></Link>
                            </div>
                            <div className={this.renderClasses('info')}>
                                <Link to={`${this.getUrl()}/info`} role="tab"><FormattedMessage id="INFORMATION" /></Link>
                            </div>
                        </div>
                        <div className="tab-content">
                            {props.children}
                        </div>
                    </div>
                    <div className="col-md-3 hidden-sm">
                        <ShoppingCart />
                    </div>
                </Loader>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isFetching: state.restaurant.isFetching,
    menuCategories: state.restaurant.menuCategories,
    menu: state.restaurant.menu,
    meta: state.restaurant.meta,
    slug: props.params.slug
})

const mapDispatchToProps= (dispatch) => ({
    getRestaurantMenu: (slug) => { getRestaurantMenu(dispatch, slug) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)