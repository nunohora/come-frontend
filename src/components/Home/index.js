import React from 'react'
import SearchPostcodeForm from 'components/SearchPostcodeForm'
import ga from 'react-ga'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

import symbol from 'img/come-symbol.png'
import note from 'img/note.png'
import mapMarker from 'img/map.png'
import sushi from 'img/sushi_box.png'
import thumbsUp from 'img/thumbs_up.png'

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
            <div styleName="home-container" className="normal-container">
                <div className="row">
                    <div className="col-sm-12 text-center mb40 mb-xs-24">
                        <img src={symbol} />
                    </div>
                </div>
                <div className="row">
                    <div className="text-center mb40 mb-xs-24">
                        <FormattedMessage id="HOME_SLOGAN"
                            tagName="h1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 mb40">
                        <SearchPostcodeForm onSubmit={this.handleSubmit.bind(this)} />
                    </div>
                </div>
                <div  styleName="steps">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div styleName="feature">
                            <div className="col-xs-4 col-sm-12 col-md-12 col-lg-12 text-center">
                                <img src={mapMarker} />
                            </div>
                            <div className="col-xs-8 col-sm-12 col-md-12 col-lg-12">
                                <div className="text-center uppercase" styleName="feature-title">
                                    <FormattedMessage id="ONDE_ESTA" tagName="h5" />
                                </div>
                                <FormattedMessage id="PRECISAMOS_CODIGO_POSTAL" tagName="p" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div styleName="feature">
                            <div className="col-xs-4 col-sm-12 col-md-12 col-lg-12 text-center">
                                <img src={sushi} />
                            </div>
                            <div className="col-xs-8 col-sm-12 col-md-12 col-lg-12">
                                <div className="text-center uppercase" styleName="feature-title">
                                    <FormattedMessage id="APETECE_COMER" tagName="h5" />
                                </div>
                                <FormattedMessage id="EXPLORA_LISTA" tagName="p" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div styleName="feature">
                            <div className="col-xs-4 col-sm-12 col-md-12 col-lg-12 text-center">
                                <img src={note} />
                            </div>
                            <div className="col-xs-8 col-sm-12 col-md-12 col-lg-12">
                                <div className="text-center uppercase" styleName="feature-title">
                                    <FormattedMessage id="DINHEIRO_OU_CARTAO" tagName="h5" />
                                </div>
                                <FormattedMessage id="ACEITAMOS_PAGAMENTO" tagName="p" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div styleName="feature">
                            <div className="col-xs-4 col-sm-12 col-md-12 col-lg-12 text-center">
                                <img src={thumbsUp} />
                            </div>
                            <div className="col-xs-8 col-sm-12 col-md-12 col-lg-12">
                                <div className="text-center uppercase" styleName="feature-title">
                                    <FormattedMessage id="PEDIDO_EFECTUADO" tagName="h5" />
                                </div>
                                <FormattedMessage id="COMIDA_CAMINHO" tagName="p" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Home, styles)