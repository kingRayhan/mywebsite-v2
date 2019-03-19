import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import meta from './Meta'
import auth from './Auth'
import error from './Error'

const middleware =
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(...[thunk]))
        : applyMiddleware(...[thunk])

const store = createStore(
    combineReducers({
        meta,
        auth,
        error,
    }),
    middleware
)
export default store
