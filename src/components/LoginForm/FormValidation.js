import memoize from 'lru-memoize'
import { createValidator, required, maxLength, email } from 'utils/validation'

const loginValidation = createValidator({
    email: [required, email],
    password: [required, maxLength(15)]
})

export default memoize(10)(loginValidation)
