// authReducer.js
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    GET_USER_BY_TOKEN
} from './authActions';

const initialState = {
    loading: false,
    token: localStorage.getItem('token'),
    error: null,
    isAuthenticated: !!localStorage.getItem('token'), // Initialize isAuthenticated based on token presence
    user : null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                error: null,
                isAuthenticated: true, // User is authenticated on successful login or registration
            };
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                isAuthenticated: false, // Authentication fails
            };
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false, // User is no longer authenticated after logout
            };
        case GET_USER_BY_TOKEN:
            return {
                ...state,
                user: action.payload, // Set the user data fetched using the token
                isAuthenticated: true, // Ensure user is authenticated
            };
        default:
            return state;
    }
};

export default authReducer;
