import axiosInstance from "./axiosInstance";
import {FETCH_ALL_STUDENT_SESSIONS_SUCCESS} from "./actionTypes.js";

export const fetchAllStudentSessionsSuccess = (studentSessions) => {
    return {
        type: FETCH_ALL_STUDENT_SESSIONS_SUCCESS,
        payload: studentSessions
    };
};

// Example of an async action creator using redux-thunk
export const fetchAllStudentSessions = (courseId,userId) => {
    return (dispatch) => {
        console.log('fetching course sessions')
        return axiosInstance.get(`student_sessions/all?courseId=${courseId}&studentId=${userId}`)
            .then(response => {
                dispatch(fetchAllStudentSessionsSuccess(response.data));
            })
            .catch(error => {
                // Handle any errors here
                console.error('Error fetching course sessions:', error);
            });
    };
};
