import React from 'react'
import SearchPostcodeForm from 'components/SearchPostcodeForm/SearchPostcodeForm'
import CSSModules from 'react-css-modules'
import styles from './Home.scss'

import CallToActionIcon from 'img/call-to-action-icon1.png'

class Home extends React.Component {

    render() {
        return (
            <div>
                <div styleName="home-top-wrapper">
                    <div styleName="call-to-action-section">
                        <div className="css-table-cell">
                            <div styleName="call-to-action-icon">
                                <img src={CallToActionIcon} alt="" />
                            </div>
                        </div>
                        <SearchPostcodeForm />
                    </div>
                    <div styleName="home-bg">
                        <div styleName="slogan" className="container">
                            <h1 className="text-right">
                                <span>Tens fome?!</span>
                                <br/>
                                <span>Come!</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div styleName="order-steps">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                                <div styleName="order-step">
                                    <i className="fa fa-map-marker fa-4x"></i>
                                    <h5>1. Diga-nos onde está</h5>
                                    <div className="bl-sort">Só precisamos do seu código postal.</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                                <div styleName="order-step">
                                    <i className="fa fa-cutlery fa-4x"></i>
                                    <h5>2. Escolha um takeaway</h5>
                                    <div className="bl-sort">O que lhe apetece comer?</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                                <div styleName="order-step">
                                    <i className="fa fa-credit-card fa-4x"></i>
                                    <h5>3. Dinheiro ou cartão</h5>
                                    <div className="bl-sort">Aceitamos as duas formas de pagamento.</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                                <div styleName="order-step">
                                    <i className="fa fa-thumbs-up fa-4x"></i>
                                    <h5>4. Já está</h5>
                                    <div className="bl-sort">A sua comida está a caminho!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(Home, styles)