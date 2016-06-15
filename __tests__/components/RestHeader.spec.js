//__tests__/components/RestHeader.spec.js

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import RestHeader from '../../src/components/RestHeader'

describe('Restaurant Header', () => {

    const meta = {
        name: 'joe bloggs',
        zone_name: 'maia',
        categories: [{
            name: 'indiana'
        }, {
            name: 'chinesa'
        }]
    }

    it('renders with right props', () => {
        const restHeader = TestUtils.renderIntoDocument(
            <RestHeader meta={meta} />
        )

        const restHeaderNode = ReactDOM.findDOMNode(restHeader)
    })
})
