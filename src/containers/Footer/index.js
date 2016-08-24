import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import HeaderLogo from 'img/header-logo.png'

let TiSocialTwitter = require('react-icons/lib/ti/social-twitter')
let TiSocialFacebook = require('react-icons/lib/ti/social-facebook')

class Footer extends React.Component {
    render() {
        return (
            <footer styleName="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <img src={HeaderLogo} alt="" />
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="widget">
                                <h6 className="title">Atalhos</h6>
                                <hr />
                                <ul styleName="quick-links">
                                    <li>
                                        <a>Porto</a>
                                    </li>
                                    <li>
                                        <a>Lisboa</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="widget">
                                <h6 className="title">Instagram</h6>
                                <hr />
                                <div styleName="instafeed" data-user-name="mrareweb">
                                    <ul>
                                        <li>
                                            <a href="https://www.instagram.com/p/BGdwg0Br3Wh/" target="_blank" title="A snap of an upcoming portfolio template">
                                                <img alt="A snap of an upcoming portfolio template" height="320" width="320" src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/13398476_758284670980565_1964434862_n.jpg?ig_cache_key=MTI2OTM4NDAzMTEwNjk4NzQyNQ%3D%3D.2" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/p/seFrrSL3e7/" target="_blank" title="Cooking up some colour scheme goodness on our latest">
                                                <img alt="Cooking up some colour scheme goodness on our latest" height="320" width="320" src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e15/10598518_868054983219549_1823485118_n.jpg?ig_cache_key=ODAxMTAyNzc1MzY0NTgxMzA3.2" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/p/sPR7HPr3eI/" target="_blank" title="A snap of our latest template 'Pivot'">
                                                <img alt="A snap of our latest template 'Pivot'" height="320" width="320" src="https://scontent.cdninstagram.com/t51.2885-15/s320x320/e15/10632214_722819361118920_1555795075_n.jpg?ig_cache_key=Nzk2OTM0NDg4MDg3MDMzNzM2.2" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <span styleName="sub">© Copyright 2016 - Come.pt</span>
                        </div>
                        <div className="col-sm-6 text-right">
                            <ul styleName="social">
                                <li>
                                    <a href="#">
                                        <TiSocialTwitter size={16} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <TiSocialFacebook size={16} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>                
                </div>
            </footer>
        )
    }
}

export default CSSModules(Footer, styles)