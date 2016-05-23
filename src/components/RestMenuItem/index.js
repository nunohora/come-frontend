import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

class RestaurantItem extends React.Component {
    render() {
        return (
            <div className="item-list">
                <div className="list-image">
                    <img alt="" />
                </div>
                <div className="all-details">
                    <div className="visible-option">
                        <div className="details">
                            <h6>
                                01. Shrimps
                            </h6>
                            <p className="m-with-details">
                                Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor,
                                et mollis pede metus eget nisi. Praesent sodales velit quis augue.
                            </p>
                        </div>
                        <div className="price-option fl">
                            <h4>$ 9.95</h4>
                            <button class="toggle">Option</button>
                        </div>
                        <div className="qty-cart text-center clearfix">
                            <button>
                                <i className="fa fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                    <div className="dropdown-option clearfix" style="display: none;">
                        <div className="dropdown-details">
                            <form className="default-form">
                                <h5>Please Select Your Option</h5>
                                <h6>Option</h6>
                                <span className="radio-input active">
                                    <input type="radio" id="rice-1" name="choose" />
                                    <label for="rice-1">Rice</label>
                                </span>
                                <span className="radio-input">
                                    <input type="radio" id="noodles-1" name="choose" />
                                    <label for="noodles-1">Noodles</label>
                                </span>
                                <span className="radio-input">
                                    <input type="radio" id="bread-1" name="choose" />
                                    <label for="bread-1">Bread</label>
                                </span>
                                <h6>Extras</h6>
                                <span className="checkbox-input">
                                    <input type="checkbox" id="shrimps-1" />
                                    <label for="shrimps-1">
                                        Double Shrimps
                                        <i className="fa fa-plus price">$3.00</i>
                                    </label>
                                </span>
                                <span className="checkbox-input">
                                    <input type="checkbox" id="extra-veggies-1" />
                                    <label for="extra-veggies-1">
                                        Extra Veggies
                                        <i className="fa fa-plus price">$3.00</i>
                                    </label>
                                </span>
                                <span className="checkbox-input">
                                    <input type="checkbox" id="additional-butter-1" />
                                    <label for="additional-butter-1">
                                        Additional Butter
                                        <i class="fa fa-plus price">$3.00</i>
                                    </label>
                                </span>
                                <h6>Additional Notes</h6>
                                <textarea placeholder="Write here"></textarea>
                                <a className="btn btn-default-red">Confirm</a>
                                <a className="btn btn-default-black">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(RestaurantItem, styles)