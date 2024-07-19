// replyCommentReducer.js

import * as actionTypes from "./actionTypes.js";

const initialState = {
    replies: [],
    error: null,
};

const replyCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REPLIES_SUCCESS:
            return {
                ...state,
                replies: action.payload,
            };
        case actionTypes.FETCH_REPLIES_FAILURE:
        case actionTypes.CREATE_REPLY_FAILURE:
        case actionTypes.UPDATE_REPLY_FAILURE:
        case actionTypes.DELETE_REPLY_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case actionTypes.CREATE_REPLY_SUCCESS:
            return {
                ...state,
                replies: [...state.replies, action.payload],
            };
        case actionTypes.UPDATE_REPLY_SUCCESS:
            return {
                ...state,
                replies: state.replies.map(reply =>
                    reply.id === action.payload.id ? action.payload : reply
                ),
            };
        case actionTypes.DELETE_REPLY_SUCCESS:
            return {
                ...state,
                replies: state.replies.filter(reply => reply.id !== action.payload),
            };
        default:
            return state;
    }
};

export default replyCommentReducer;
