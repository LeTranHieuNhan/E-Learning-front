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
export const fetchTeacherCoursesSuccess = (courses) => {
    return {
        type: actionTypes.FETCH_TEACHER_COURSES_SUCCESS,
        courses
    };
};

// Thunk action for fetching teacher courses by teacher ID
export const fetchTeacherCourses = (teacherId) => {
    return dispatch => {
        axiosInstance.get(`/courses/teachers/${teacherId}`)
            .then(response => {
                dispatch(fetchTeacherCoursesSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
}


export const fetchUserEnrolledCoursesSuccess = (courses) => {
    return {
        type: actionTypes.FETCH_USER_ENROLLED_COURSES_SUCCESS,
        courses
    };
};

export const fetchUserEnrolledCourses = (userId) => {
    return dispatch => {
        axiosInstance.get(`/courses/user_enrolled/${userId}`)
            .then(response => {
                dispatch(fetchUserEnrolledCoursesSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};
