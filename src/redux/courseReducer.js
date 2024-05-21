// courseReducer.js

import * as actionTypes from "./actionTypes.js";

const initialState = {
    courses: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.courses
            };
        default:
            return state;
    }
};

export default reducer;
