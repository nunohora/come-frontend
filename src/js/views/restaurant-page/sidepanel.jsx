import React from 'react';

module.exports = React.createClass({

    render() {
        return (
                <div class="side-panel">
                    <form class="default-form" action="index.html">
                        <h6 class="toggle-main-title">Side Panel</h6>
                        <div class="sd-panel-heading">
                            <h5 class="toggle-title">My Check</h5>
                            <div class="slideToggle">
                                <ul class="list-unstyled">
                                    <li>
                                        <p>2x Shrimps
                                            <span class="icon-link"><i class="fa fa-pencil"></i><i class="fa fa-times"></i>
                                            </span>
                                        </p>

                                        <p class="price">$ 19.95</p>
                                    </li>
                                    <li>
                                        <p>1x Coca cola
													<span class="icon-link"><i class="fa fa-pencil"></i><i class="fa fa-times"></i>
													</span>
                                        </p>

                                        <p class="price">$ 1.95</p>
                                    </li>
                                    <li>
                                        <p>1x Sake
													<span class="icon-link"><i class="fa fa-pencil"></i><i class="fa fa-times"></i>
													</span>
                                        </p>

                                        <p class="price">$ 15.95</p>
                                    </li>

                                    <li>
                                        <p>Total</p>
                                        <p class="price-total">$ 35.95</p>
                                    </li>
                                </ul>

                                <div class="checkout">
                                    <a class="btn btn-default-red" href="#"><i class="fa fa-shopping-cart"></i>Checkout</a>
                                </div>
                            </div>
                        </div>
                        <div class="search-keyword">
                            <input type="text" placeholder="Search by keyword">
                                <button type="submit" value=""><i class="fa fa-search"></i>
                                </button>
                            </div>
                            <div class="category">
                                <h5 class="">Category</h5>
                                <div class="toggle-content">
                                    <h5 class="toggle-title">Fruits</h5>
                                    <ul class="list-unstyled">
                                        <li>
												<span class="checkbox-input">
													<input type="checkbox" id="fruits-1">
                                                        <label for="fruits-1">Chicken</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="fruits-2">
                                                        <label for="fruits-2">Duck</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="fruits-3">
                                                        <label for="fruits-3">Turky</label>
                                                    </span>
                                        </li>
                                    </ul>
                                </div>

                                            <div class="toggle-content">
                                                <h5 class="toggle-title">Meat</h5>
                                                <ul class="list-unstyled">
                                                    <li>
												<span class="checkbox-input">
													<input type="checkbox" id="meat-1">
                                                        <label for="meat-1">Chicken</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="meat-2">
                                                        <label for="meat-2">Duck</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="meat-3">
                                                        <label for="meat-3">Turky</label>
                                                    </span>
                                        </li>
                                    </ul>
                                </div>

                                                        <div class="toggle-content">
                                                            <h5 class="toggle-title">Fish</h5>
                                                            <ul class="list-unstyled">
                                                                <li>
												<span class="checkbox-input">
													<input type="checkbox" id="fish-1">
                                                        <label for="fish-1">Chicken</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="fish-2">
                                                        <label for="fish-1">Duck</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="fish-3">
                                                        <label for="fish-3">Turky</label>
                                                    </span>
                                        </li>
                                    </ul>
                                </div>

                                                                    <div class="toggle-content">
                                                                        <h5 class="toggle-title">poultry</h5>
                                                                        <ul class="list-unstyled">
                                                                            <li>
												<span class="checkbox-input">
													<input type="checkbox" id="poultry-1">
                                                        <label for="poultry-1">Chicken</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="poultry-2">
                                                        <label for="poultry-2">Duck</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="poultry-3">
                                                        <label for="poultry-3">Turky</label>
                                                    </span>
                                        </li>
                                    </ul>
                                </div>

                                                                                <div class="toggle-content">
                                                                                    <h5 class="toggle-title">Vegitables</h5>
                                                                                    <ul class="list-unstyled">
                                                                                        <li>
												<span class="checkbox-input">
													<input type="checkbox" id="vegitable-1">
                                                        <label for="vegitable-1">Chicken</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="vegitable-2">
                                                        <label for="vegitable-2">Duck</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="vegitable-3">
                                                        <label for="vegitable-3">Turky</label>
                                                    </span>
                                        </li>
                                    </ul>
                                </div>

                                                                                            <div class="toggle-content">
                                                                                                <h5 class="toggle-title">Drinks</h5>
                                                                                                <ul class="list-unstyled">
                                                                                                    <li>
												<span class="checkbox-input">
													<input type="checkbox" id="drinks-1">
                                                        <label for="drinks-1">Chicken</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="drinks-2">
                                                        <label for="drinks-2">Duck</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="drinks-3">
                                                        <label for="drinks-3">Turky</label>
                                                    </span>
                                        </li>
                                    </ul>
                                </div>

                                                                                                        <div class="toggle-content">
                                                                                                            <h5 class="toggle-title">Desserts</h5>
                                                                                                            <ul class="list-unstyled">
                                                                                                                <li>
												<span class="checkbox-input">
													<input type="checkbox" id="desserts-1">
                                                        <label for="desserts-1">Chicken</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="desserts-2">
                                                        <label for="desserts-2">Duck</label>
                                                    </span>
												<span class="checkbox-input">
													<input type="checkbox" id="desserts-3">
                                                        <label for="desserts-3">Turky</label>
                                                    </span>
                                        </li>
                                    </ul>
                                </div>
                                                                                                                </div>
                                                                                                                <!--end .category-->
                                                                                                                <div class="miscellaneous">
                                                                                                                    <h5 class="">Miscellaneous</h5>
                                                                                                                    <div class="radio">
										<span class="radio-input">
											<input type="radio" name="name-1" id="yes" checked>
                                                <label for="yes">Yes</label>
                                            </span>
										<span class="radio-input">
											<input type="radio" name="name-1" id="no">
                                                <label for="no">No</label>
                                            </span>
                                </div>
                                            <!--end .radio-input -->
										<span class="checkbox-input">
											<input type="checkbox" id="option-1" checked>
                                                <label for="option-1">Option1</label>
                                            </span>
										<span class="checkbox-input">
											<input type="checkbox" id="option-2">
                                                <label for="option-2">Option2</label>
                                            </span>

                                <div class="tag">
                                    <ul class="list-inline">
                                        <li><a href="#">Tag 1</a>
                                        </li>
                                        <li><a href="#">Tag 2</a>
                                        </li>
                                        <li><a href="#">Tag 3</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
            <div class="properties-search-filter">
                <div class="price-filter">
                    <h5>Price Range</h5>
                    <div class="">
                        <div class="slider-range-container">
                            <div class="slider-range" data-min="1" data-max="500" data-step="1" data-default-min="1" data-default-max="195" data-currency="$">
                            </div>
                            <div class="clearfix">
                                <input type="text" class="range-from" value="$ 1">
                                    <input type="text" class="range-to" value="$ 500">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});