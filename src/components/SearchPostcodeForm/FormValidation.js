import memoize from 'lru-memoize'
import { utils } from '@come/redux-store'

const { createValidator, required, postcode } = utils.validation

const postcodeValidation = createValidator({
    postcode: [required, postcode]
})

export default memoize(10)(postcodeValidation)