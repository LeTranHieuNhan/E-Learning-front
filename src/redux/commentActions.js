// commentActions.js
import axiosInstance from "./axiosInstance.js";
import * as actionTypes from "./actionTypes.js";

export const fetchCommentsSuccess = (comments) => ({
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    payload: comments,
});

export const fetchCommentsFailure = (error) => ({
    type: actionTypes.FETCH_COMMENTS_FAILURE,
    payload: error,
});

export const createCommentSuccess = (comment) => ({
    type: actionTypes.CREATE_COMMENT_SUCCESS,
    payload: comment,
});

export const createCommentFailure = (error) => ({
    type: actionTypes.CREATE_COMMENT_FAILURE,
    payload: error,
});

export const updateCommentSuccess = (comment) => ({
    type: actionTypes.UPDATE_COMMENT_SUCCESS,
    payload: comment,
});

export const updateCommentFailure = (error) => ({
    type: actionTypes.UPDATE_COMMENT_FAILURE,
    payload: error,
});

export const deleteCommentSuccess = (id) => ({
    type: actionTypes.DELETE_COMMENT_SUCCESS,
    payload: id,
});

export const deleteCommentFailure = (error) => ({
    type: actionTypes.DELETE_COMMENT_FAILURE,
    payload: error,
});

export const deleteAllCommentsByCourseSessionSuccess = (courseSessionId) => ({
    type: actionTypes.DELETE_ALL_COMMENTS_BY_COURSE_SESSION_SUCCESS,
    payload: courseSessionId,
});

export const deleteAllCommentsByCourseSessionFailure = (error) => ({
    type: actionTypes.DELETE_ALL_COMMENTS_BY_COURSE_SESSION_FAILURE,
    payload: error,
});

export const fetchComments = (courseSessionId) => {
    return dispatch => {
        axiosInstance.get(`/comments/course_session/${courseSessionId}`)
            .then(response => dispatch(fetchCommentsSuccess(response.data)))
            .catch(error => dispatch(fetchCommentsFailure(error.message)));
    };
};

export const createComment = (commentDto, courseSessionId, userId) => {
    console.log(commentDto, courseSessionId, userId)
    return dispatch => {
        if (!courseSessionId || !userId) {
            dispatch(createCommentFailure("Course session ID or user ID is missing"));
            return;
        }

        const payload = {
            body: commentDto.body,
            courseSession: { id: courseSessionId },
            user: { id: userId }
        };

        axiosInstance.post(`/comments/course_session/${courseSessionId}/user/${userId}`, payload)
            .then(response => dispatch(createCommentSuccess(response.data)))
            .catch(error => dispatch(createCommentFailure(error.message)));
    };
};

export const updateComment = (id, commentDto) => {
    return dispatch => {
        axiosInstance.put(`/comments/${id}`, commentDto)
            .then(response => dispatch(updateCommentSuccess(response.data)))
            .catch(error => dispatch(updateCommentFailure(error.message)));
    };
};

export const deleteComment = (id) => {
    return dispatch => {
        axiosInstance.delete(`/comments/${id}`)
            .then(() => dispatch(deleteCommentSuccess(id)))
            .catch(error => dispatch(deleteCommentFailure(error.message)));
    };
};

export const deleteAllCommentsByCourseSession = (courseSessionId) => {
    return dispatch => {
        axiosInstance.delete(`/comments/course_session/${courseSessionId}`)
            .then(() => dispatch(deleteAllCommentsByCourseSessionSuccess(courseSessionId)))
            .catch(error => dispatch(deleteAllCommentsByCourseSessionFailure(error.message)));
    };
};
