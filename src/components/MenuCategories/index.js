import React, { PropTypes } from 'react'

export default class MenuCategories extends React.Component {

    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    render() {
        return (
            <div styleName="side-panel">
                <h6 styleName="title">Categorias</h6>
                <div styleName="categories">
                    <ul className="list-unstyled">
                        {
                            this.props.categories.map(category => {
                                return <li styleName="list-item" key={category.id}>{category.name}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}