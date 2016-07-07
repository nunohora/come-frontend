import memoize from 'lru-memoize'
import { createValidator, required, postcode } from 'redux-store/utils/validation'

const postcodeValidation = createValidator({
    postcode: [required, postcode]
})

export default memoize(10)(postcodeValidation)