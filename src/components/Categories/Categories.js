import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import slug from 'slug';

export default class Categories extends React.Component {

    static propTypes = {
        list: PropTypes.array,
        postcode: PropTypes.string.isRequired
    }

    buildUrl(category) {
        let location = this.props.postcode,
            rep = `/search/${location}`,
            catSlug;

        if (category.name !== 'Total') {
            catSlug = '/' + slug(category.name, {lower: true});

            rep += catSlug + '/' + category.id;
        }

        return rep;
    }

    renderCategories(categories = [], id = 0) {
        return categories.map(category => {
            const className = `tag ${id === category.id ? 'selected' : ''}`;

            return (
                <li key={category.id}>
                    <Link to={this.buildUrl(category)}>
                        {category.name}
                        <span className={className}>{category.resultNumber}</span>
                    </Link>
                </li>
            );
        }, this);
    }

    render() {
        return (
            <div className="side-panel">
                <div className="categories">
                    <h4>Categorias</h4>
                    <ul className="list-unstyled">
                        {this.renderCategories()}
                    </ul>
                </div>
            </div>
        );
    }
}