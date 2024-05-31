// userReducer.js
import * as actionTypes from './actionTypes';

const initialState = {
    user: null,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_SUCCESS:
        case actionTypes.CREATE_USER_SUCCESS:
        case actionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: null
            };
        case actionTypes.FETCH_USER_FAILURE:
        case actionTypes.CREATE_USER_FAILURE:
        case actionTypes.UPDATE_USER_FAILURE:
        case actionTypes.DELETE_USER_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                user: null,
                error: null
            };
        case actionTypes.FETCH_USER_BY_ID_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: null
            };
        case actionTypes.FETCH_TEACHER_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: null
            };
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                user: null,
                error: null
            };
        default:
            return state;
    }
};

export default userReducer;
