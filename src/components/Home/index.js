import React from 'react'
import SearchPostcodeForm from 'components/SearchPostcodeForm'
import ga from 'react-ga'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

import logoIcon from 'img/logo1.png'

class Home extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    handleSubmit(props) {
        ga.event({
            category: 'Search',
            action: 'Search Postcode',
            value: props.postcode
        })
        this.context.router.push(`/search/${props.postcode}`)
    }

    render() {
        return (
            <div>
                <div styleName="home-top-wrapper">
                    <div className="container" styleName="call-to-action-section">
                        <div className="css-table-cell">
                            <div styleName="call-to-action-icon">
                                <img src={logoIcon} alt="" />
                            </div>
                        </div>
                        <SearchPostcodeForm onSubmit={this.handleSubmit.bind(this)} />
                    </div>
                    <div styleName="home-bg">
                        <div styleName="slogan" className="container">
                            <h1 className="text-right">
                                <span>
                                    <FormattedMessage id="TENS_FOME"/>
                                </span>
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
                                    <h5 className="step-title">
                                        <FormattedMessage id="ONDE_ESTA" />
                                    </h5>
                                    <div styleName="bl-sort">
                                        <FormattedMessage id="PRECISAMOS_CODIGO_POSTAL" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                                <div styleName="order-step">
                                    <i className="fa fa-cutlery fa-4x"></i>
                                    <h5 className="step-title">
                                        <FormattedMessage id="APETECE_COMER" />
                                    </h5>
                                    <div styleName="bl-sort">
                                        <FormattedMessage id="EXPLORA_LISTA" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                                <div styleName="order-step">
                                    <i className="fa fa-credit-card fa-4x"></i>
                                    <h5 className="step-title">
                                        <FormattedMessage id="DINHEIRO_OU_CARTAO" />
                                    </h5>
                                    <div styleName="bl-sort">
                                        <FormattedMessage id="ACEITAMOS_PAGAMENTO" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6 text-center">
                                <div styleName="order-step">
                                    <i className="fa fa-thumbs-up fa-4x"></i>
                                    <h5 className="step-title">
                                        <FormattedMessage id="PEDIDO_EFECTUADO" />
                                    </h5>
                                    <div styleName="bl-sort">
                                        <FormattedMessage id="COMIDA_CAMINHO" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Home, styles)