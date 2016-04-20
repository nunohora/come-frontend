import React from 'react';
//import Sidepanel from './sidepanel';

export class Restaurant extends React.Component {
    getInitialState() {
        let state = {};

        state.loaded = false;

        return state;
    }

    render() {
        return (
            <div className="container">
                <div class="col-md-3 col-sm-12 col-xs-12 col-md-pull-9">
                </div>
            </div>
        )
    }
}