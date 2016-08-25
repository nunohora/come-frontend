import React from 'react'
import SearchPostcodeForm from 'components/SearchPostcodeForm'
import ga from 'react-ga'
import { FormattedMessage } from 'react-intl'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'

import symbol from 'img/come-symbol.png'

let FaMapMarker = require('react-icons/lib/fa/map-marker')
let TiThList = require('react-icons/lib/ti/th-list-outline')
let TiCreditCard = require('react-icons/lib/ti/credit-card')
let TiThumbsOk = require('react-icons/lib/ti/thumbs-ok')

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
                    <h1 className="text-center mb40 mb-xs-24">
                        Comida sem sair de casa
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-10 col-sm-offset-1 mb40 mb-xs-24">
                        <SearchPostcodeForm onSubmit={this.handleSubmit.bind(this)} />
                    </div>
                </div>
                <div  styleName="steps" className="row">
                    <div className="col-sm-3">
                        <div styleName="feature">
                            <div className="text-center">
                                <FaMapMarker size={80} styleName="icon" />
                                <FormattedMessage 
                                        id="ONDE_ESTA"
                                        className="uppercase"
                                        tagName="h5" />
                            </div>
                            <FormattedMessage 
                                id="PRECISAMOS_CODIGO_POSTAL"
                                tagName="p" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div styleName="feature">
                            <div className="text-center">
                                <TiThList size={80} styleName="icon" />
                                <FormattedMessage 
                                    id="APETECE_COMER" 
                                    className="uppercase"
                                    tagName="h5" />
                            </div>
                            <FormattedMessage 
                                id="EXPLORA_LISTA" 
                                tagName="p" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div styleName="feature">
                            <div className="text-center">
                                <TiCreditCard size={80} styleName="icon" />
                                <FormattedMessage 
                                    id="DINHEIRO_OU_CARTAO" 
                                    className="uppercase"
                                    tagName="h5" />
                            </div>
                            <FormattedMessage 
                                id="ACEITAMOS_PAGAMENTO" 
                                tagName="p" />
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div styleName="feature">
                            <div className="text-center">
                                <TiThumbsOk size={80} styleName="icon" />
                                <FormattedMessage id="PEDIDO_EFECTUADO" 
                                    className="uppercase" 
                                    tagName="h5" />
                            </div>
                            <FormattedMessage 
                                id="COMIDA_CAMINHO" 
                                tagName="p" />
                        </div>
                    </div>
                </div>                    
            </div>
        )
    }
}

export default CSSModules(Home, styles)