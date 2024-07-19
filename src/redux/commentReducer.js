// commentReducer.js


import * as actionTypes from "./actionTypes.js";

const initialState = {
    comments: [],
    error: null,
    loading: false,
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                loading: false,
                error: null,
            };
        case actionTypes.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionTypes.CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [...state.comments, action.payload],
                loading: false,
                error: null,
            };
        case actionTypes.CREATE_COMMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionTypes.UPDATE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: state.comments.map(comment =>
                    comment.id === action.payload.id ? action.payload : comment
                ),
                loading: false,
                error: null,
            };
        case actionTypes.UPDATE_COMMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionTypes.DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.payload),
                loading: false,
                error: null,
            };
        case actionTypes.DELETE_COMMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case actionTypes.DELETE_ALL_COMMENTS_BY_COURSE_SESSION_SUCCESS:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.courseSessionId !== action.payload),
                loading: false,
                error: null,
            };
        case actionTypes.DELETE_ALL_COMMENTS_BY_COURSE_SESSION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default commentReducer;
