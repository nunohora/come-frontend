import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import LogoComplete from 'img/logo-complete.png'
import { FormattedMessage } from 'react-intl'

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
                                <FormattedMessage id="QUICK_LINKS">
                                    { message => <h6 className="title">{message}</h6> }
                                </FormattedMessage>
                                <hr />
                                <ul styleName="quick-links">
                                    <li>
                                        <FormattedMessage id="ABOUT_US">
                                            { message => <Link to="/about-us">{message}</Link> }
                                        </FormattedMessage>
                                    </li>
                                    <li>
                                        <FormattedMessage id="BECOME_PARTNER">
                                            { message => <Link to="/restaurant-partner">{message}</Link> }
                                        </FormattedMessage>
                                    </li>
                                    <li>
                                        <FormattedMessage id="FAQS">
                                            { message => <Link to="/faq">{message}</Link> }
                                        </FormattedMessage>
                                    </li>
                                    <li>
                                        <FormattedMessage id="CONTACT_US">
                                            { message => <a href="mailto:ola@come.pt">{message}</a> }
                                        </FormattedMessage>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="widget">
                                <FormattedMessage id="SOCIAL_NETWORKS">
                                    { message => <h6 className="title">{message}</h6> }
                                </FormattedMessage>
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
                <FormattedMessage id="BACK_TO_TOP">
                    { message => <a className="btn btn-sm fade-half back-to-top-btn" href="#">{message}</a> }
                </FormattedMessage>
            </footer>
        )
    }
}

export default CSSModules(Footer, styles)