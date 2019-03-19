export const CATCH_ERRORS = 'CATCH_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const reducer = (state = {}, { type, payload }) => {
    switch (type) {
        case CATCH_ERRORS: {
            return {
                ...state,
                ...payload,
            }
        }
        case CLEAR_ERRORS: {
            return {}
        }
        default:
            return state
    }
}

export default reducer

/**
 *
 */
export const catchErrors = payload => dispatch => {
    dispatch({ type: CATCH_ERRORS, payload })
}
export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS })
}
