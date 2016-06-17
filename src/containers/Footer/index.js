import React from 'react'
import classes from './styles.scss'

import HeaderLogo from 'img/header-logo.png'

export default class Footer extends React.Component {
    render() {
        return ( 
            <footer className={classes.footer}>
                <div className="container">
                    <div className={classes.mainFooter}>
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <img src={HeaderLogo} alt="" />
                                <ul styleName="header-social">
                                    <li>
                                        <i className="fa fa-lg fa-facebook-square"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-lg fa-twitter-square"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-lg fa-google-plus-square"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <h5>Quick Links</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className={classes.mainFooter.footerLinks}>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Menu Card</a></li>
                                            <li><a href="#">reservation</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-6">
                                        <ul className={classes.mainFooter.footerLinks}>
                                            <li><a href="#">about us</a></li>
                                            <li><a href="#">news &amp; events</a></li>
                                            <li><a href="#">contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <h5>Latest Tweets
									<span>
										<i className="fa fa-chevron-left"></i>
										<i className="fa fa-chevron-right"></i>
									</span>
                                </h5>

                                <p>
                                    <a href="#">takeaway:</a>
                                    Take a (Photo) Tour of #Envatos #Melbourne Headquarters (...)
                                    <br />
                                    <span>7 hours ago</span>
                                </p>
                            </div>

                            <div className="col-sm-6 col-md-3">
                                <h5>Newsletter</h5>
                                <p>Sign up for our newsletter!</p>
                                <div className={classes.footerSubscribe}>
                                    <form>
                                        <input type="Email" placeholder="Email address..." />
                                        <button type="submit" value="">
                                            <i className="fa fa-plus-circle-o"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}