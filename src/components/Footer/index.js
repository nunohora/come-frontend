import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import LogoComplete from 'img/logo-complete.png'

let TiSocialTwitter = require('react-icons/lib/ti/social-twitter')
let TiSocialFacebook = require('react-icons/lib/ti/social-facebook')

class Footer extends React.Component {
    render() {
        return (
            <footer styleName="footer">
                <div className="container">
                    <div className="col-lg-10 col-lg-offset-1">
                        <div className="col-sm-6 col-md-4">
                            <img styleName="logo-complete" src={LogoComplete} alt="" />
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="widget">
                                <h6 className="title">Atalhos</h6>
                                <hr />
                                <ul styleName="quick-links">
                                    <li>
                                        <Link to="/about-us">About Come.pt</Link>
                                    </li>
                                    <li>
                                        <Link to="/restaurant-partner">Become a Restaurant Partner</Link>
                                    </li>
                                    <li>
                                        <Link to="/faq">FAQs</Link>
                                    </li>
                                    <li>
                                        <a href="mailto:ola@come.pt">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="widget">
                                <h6 className="title">Social Networks</h6>
                                <hr />
                                <ul styleName="social">
                                    <li>
                                        <a href="https://facebook.com/come.pt">
                                            <TiSocialFacebook size={35} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/come_pt">
                                            <TiSocialTwitter size={35} />
                                        </a>
                                    </li>
                                </ul>
                                <ul styleName="hash-tag">
                                    <li>
                                        #COME
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div styleName="sub">© Copyright 2016 - Come.pt</div>
                </div>
                <a className="btn btn-sm fade-half" styleName="back-to-top" href="#">Back to top</a>
            </footer>
        )
    }
}

export default CSSModules(Footer, styles)