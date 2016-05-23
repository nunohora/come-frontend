import React, { PropTypes } from 'react'

export default class MenuCategories extends React.Component {

    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="side-panel">
                <h6 className="title">Categorias</h6>
                <div className="categories">
                    <ul className="list-unstyled">
                        <li className="list-item">Entradas</li>
                        <li className="list-item">Carne</li>
                        <li className="list-item">Peixe</li>
                        <li className="list-item">Sobremesas</li>
                        <li className="list-item">Bebidas</li>
                    </ul>
                </div>
            </div>
        )
    }
}