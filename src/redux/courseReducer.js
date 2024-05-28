import * as actionTypes from "./actionTypes.js";

const initialState = {
    courses: [],
    selectedCourse: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.courses
            };
        case actionTypes.GET_COURSE_BY_ID_SUCCESS:
            return {
                ...state,
                selectedCourse: action.selectedCourse
            };
        default:
            return state;
    }
};

export default reducer;
