// import jwtDecode from 'jwt-decode'
// import Axios from 'axios'

// import Router from 'next/router'

// import { LOADING_STATE } from './Meta'
// import { CLEAR_ERRORS, CATCH_ERRORS } from './Error'

export const SET_USER = 'SET_USER'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
const reducer = (state = { isAuthenticated: false }, { type, payload }) => {
    switch (type) {
        case SET_USER: {
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
            }
        }
        case AUTH_LOGOUT: {
            return {
                isAuthenticated: false,
                user: null,
            }
        }
        default:
            return state
    }
}

export default reducer

/**
 *
 * @param payload
 */
export const setUser = payload => dispatch => {
    dispatch({ type: SET_USER, payload })
}

/**
 *
 * @param history
 */
export const AuthLogout = () => dispatch => {}

/**
 * @param object state User credentials -> {user: username/email , password}
 * @param  history
 * @param {string} redirectTo | redirect url
 */
export const AuthLogin = (state, redirectTo) => dispatch => {}

/**
 * @param object state User credentials -> {user: username/email , password}
 * @param history
 */
export const AuthRegistration = state => dispatch => {}

/**
 * @param object state User credentials -> {user: username/email , password}
 * @param history
 */
export const AuthPasswordReset = state => dispatch => {}

/**
 * @param object state -> { username/email }
 */
export const AuthForgotPassword = user => dispatch => {}
