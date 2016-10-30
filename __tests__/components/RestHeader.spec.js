//__tests__/components/RestHeader.spec.js
jest.unmock('../../src/components/RestHeader')

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import RestHeader from '../../src/components/RestHeader'

describe('<RestHeader />', () => {

    const meta = {
        name: 'joe bloggs',
        zone_name: 'maia',
        categories: [{
            name: 'indiana'
        }, {
            name: 'chinesa'
        }]
    }

    const renderer = TestUtils.createRenderer()

    it('renders with right props', () => {
        renderer.render(
            <RestHeader meta={meta} />
        )
    })
})