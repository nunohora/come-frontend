import React, { PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classnames from 'classnames'
import CSSModules from 'react-css-modules'
import { getRestaurantMenu } from 'redux-store/modules/restaurant'
import { addOrderItem } from 'redux-store/modules/shoppingCart'
import Loader from 'react-loader'
import MenuCategories from 'components/MenuCategories'
import RestaurantHeader from 'components/RestHeader'
import ShoppingCart from 'containers/ShoppingCart'
import { FormattedMessage } from 'react-intl'
import styles from './styles.scss'

class Restaurant extends React.Component {

    static propTypes = {
        getRestaurantMenu: PropTypes.func.isRequired,
        menuCategories: PropTypes.array.isRequired,
        meta: PropTypes.object.isRequired,
        menu: PropTypes.array.isRequired,
        slug: PropTypes.string.isRequired,
        location: PropTypes.object.isRequired,
        isFetching: PropTypes.bool.isRequired
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

        const childrenWithProps = React.Children.map(props.children, child => {
            return React.cloneElement(child, {
                addOrderItem: props.addOrderItem,
                menu: props.menu,
                isFetching: props.isFetching
            })
        })

        return (
            <div className="row normal-container">
                <Loader loaded={!props.isFetching}>
                    <div className="hidden-xs hidden-sm col-md-3 col-lg-3">
                        <MenuCategories categories={props.menuCategories} path={this.getUrl()} />
                    </div>
                    <div className="col-sm-8 col-md-6 col-lg-6">
                        <RestaurantHeader meta={props.meta} />
                        <div className="button-tabs">
                            <div className={this.renderClasses('menu')} styleName="rest-tab">
                                <Link to={`${this.getUrl()}`} role="tab"><FormattedMessage id="MENU" /></Link>
                            </div>
                            <div className={this.renderClasses('reviews')} styleName="rest-tab">
                                <Link to={`${this.getUrl()}/reviews`} role="tab"><FormattedMessage id="REVIEWS" /></Link>
                            </div>
                            <div className={this.renderClasses('info')} styleName="rest-tab">
                                <Link to={`${this.getUrl()}/info`} role="tab"><FormattedMessage id="INFORMATION" /></Link>
                            </div>
                        </div>
                        <div className="tab-content">
                            {childrenWithProps}
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-3 col-lg-3">
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

const mapDispatchToProps = (dispatch, props) => ({
    getRestaurantMenu: (slug) => { getRestaurantMenu(dispatch, slug) },
    addOrderItem: (item) => { addOrderItem(dispatch, props.params.slug, item) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Restaurant, styles))
