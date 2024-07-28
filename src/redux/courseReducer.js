import * as actionTypes from "./actionTypes.js";

const initialState = {
    courses: [],
    selectedCourse: null,
    userEnrolledCourses: [],

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
        case actionTypes.FETCH_TEACHER_COURSES_SUCCESS:
            return {
                ...state,
                teacherCourses: action.courses
            };
        case actionTypes.FETCH_USER_ENROLLED_COURSES_SUCCESS:
            return {
                ...state,
                userEnrolledCourses: action.courses
            };
        default:
            return state;
    }
};

export default reducer;
