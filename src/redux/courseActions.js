    import * as actionTypes from './actionTypes';
import axiosInstance from "./axiosInstance.js";

export const fetchCoursesSuccess = (courses) => {
    return {
        type: actionTypes.FETCH_COURSES_SUCCESS,
        courses
    };
};

export const fetchCourses = () => {
    return dispatch => {
        axiosInstance.get('/courses')
            .then(response => {
                dispatch(fetchCoursesSuccess(response.data));
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const getCourseByIdSuccess = (course) => {
    return {
        type: actionTypes.GET_COURSE_BY_ID_SUCCESS,
        selectedCourse: course
    };
};

export const getCourseById = (courseId) => {
    return dispatch => {
        axiosInstance.get(`/courses/${courseId}`)
            .then(response => {
                dispatch(getCourseByIdSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};
