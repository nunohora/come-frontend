import React from 'react'
import SearchPostcodeForm from 'components/SearchPostcodeForm'
import ga from 'react-ga'
import MediaQuery from 'react-responsive'
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

    renderStep(obj) {
        return (
            <div key={obj.icon} className="col-sm-6 col-md-3 col-lg-3">
                <div styleName="feature">
                    <div className="col-xs-3 col-sm-12 col-md-12 col-lg-12 text-center" styleName="feature-icon">
                        <img src={obj.icon} />
                    </div>
                    <div className="col-xs-9 col-sm-12 col-md-12 col-lg-12" styleName="feature-text">
                        <div className="text-center uppercase" styleName="feature-title">
                            <FormattedMessage id={obj.title} tagName="h5" />
                        </div>
                        <FormattedMessage id={obj.desc} tagName="p" />
                    </div>
                </div>
            </div>
        )
    }

    render() {

        const steps = [{
            icon: mapMarker,
            title: 'ONDE_ESTA',
            desc: 'PRECISAMOS_CODIGO_POSTAL'
        }, {
            icon: sushi,
            title: 'APETECE_COMER',
            desc: 'EXPLORA_LISTA'
        }, {
            icon: note,
            title: 'DINHEIRO_OU_CARTAO',
            desc: 'ACEITAMOS_PAGAMENTO'
        }, {
            icon: thumbsUp,
            title: 'PEDIDO_EFECTUADO',
            desc: 'COMIDA_CAMINHO'
        }]

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
                    <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 mb40">
                        <SearchPostcodeForm onSubmit={this.handleSubmit.bind(this)} />
                    </div>
                </div>
                <div  styleName="steps">
                    {steps.map(step => { return this.renderStep(step) })}
                </div>
            </div>
        )
    }
}

export default CSSModules(Home, styles)