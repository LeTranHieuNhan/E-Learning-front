import axiosInstance from '../axiosInstance';
import * as actionTypes from './actionTypes';

export const fetchCoursesSuccess = (courses) => {
    return {
        type: actionTypes.FETCH_COURSES_SUCCESS,
        courses: courses
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
