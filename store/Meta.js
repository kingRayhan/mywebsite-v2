import progress from 'nprogress'
export const LOADING_STATE = 'LOADING_STATE'
const reducer = (state = { isLoading: false }, { type, payload }) => {
    switch (type) {
        case LOADING_STATE: {
            if (payload === true) progress.start()
            else progress.done()
            return {
                ...state,
                isLoading: payload,
            }
        }
        default:
            return state
    }
}

export default reducer

export const loadingState = payload => dispatch => {
    dispatch({ type: LOADING_STATE, payload })
}
