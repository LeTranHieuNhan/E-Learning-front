import axiosInstance from "./axiosInstance";
import { FETCH_ALL_STUDENT_SESSIONS_SUCCESS, MARK_AS_WATCHED } from "./actionTypes.js";

export const fetchAllStudentSessionsSuccess = (studentSessions) => ({
    type: FETCH_ALL_STUDENT_SESSIONS_SUCCESS,
    payload: studentSessions
});

export const fetchAllStudentSessions = (courseId, userId) => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/student_sessions/all?courseId=${courseId}&studentId=${userId}`);
        dispatch(fetchAllStudentSessionsSuccess(response.data));
    } catch (error) {
        console.error('Error fetching course sessions:', error);
        // Optionally, dispatch an error action here if you want to handle errors in the redux state
        // dispatch({ type: FETCH_ERROR, payload: error });
    }
};

export const markAsWatched = (sessionId) => async (dispatch) => {
    try {
        await axiosInstance.put(`/student_sessions/changeStatus?sessionID=${sessionId}`);
        dispatch({ type: MARK_AS_WATCHED, payload: sessionId });
    } catch (error) {
        console.error('Error marking session as watched:', error);
        // Optionally, dispatch an error action here if you want to handle errors in the redux state
        // dispatch({ type: MARK_AS_WATCHED_ERROR, payload: error });
    }
};
