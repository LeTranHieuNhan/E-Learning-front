import axiosInstance from "./axiosInstance.js";
import * as actionTypes from "./actionTypes.js";

export const fetchRepliesSuccess = (replies) => ({
    type: actionTypes.FETCH_REPLIES_SUCCESS,
    payload: replies,
});

export const fetchRepliesFailure = (error) => ({
    type: actionTypes.FETCH_REPLIES_FAILURE,
    payload: error,
});

export const createReplySuccess = (reply) => ({
    type: actionTypes.CREATE_REPLY_SUCCESS,
    payload: reply,
});

export const createReplyFailure = (error) => ({
    type: actionTypes.CREATE_REPLY_FAILURE,
    payload: error,
});

export const updateReplySuccess = (reply) => ({
    type: actionTypes.UPDATE_REPLY_SUCCESS,
    payload: reply,
});

export const updateReplyFailure = (error) => ({
    type: actionTypes.UPDATE_REPLY_FAILURE,
    payload: error,
});

export const deleteReplySuccess = (id) => ({
    type: actionTypes.DELETE_REPLY_SUCCESS,
    payload: id,
});

export const deleteReplyFailure = (error) => ({
    type: actionTypes.DELETE_REPLY_FAILURE,
    payload: error,
});

export const fetchRepliesByCommentId = (commentId) => {
    return dispatch => {
        return axiosInstance.get(`/reply_comments/comment/${commentId}`)
            .then(response => dispatch(fetchRepliesSuccess(response.data)))
            .catch(error => dispatch(fetchRepliesFailure(error.message)));
    };
};

export const createReply = (replyDto, commentId, userId) => {
    return dispatch => {
        const payload = {
            body: replyDto.body,
            comment: { id: commentId },
            user: { id: userId }
        };

        return axiosInstance.post(`/reply_comments/comment/${commentId}/user/${userId}`, payload)
            .then(response => dispatch(createReplySuccess(response.data)))
            .catch(error => dispatch(createReplyFailure(error.message)));
    };
};

export const updateReply = (id, replyDto) => {
    return dispatch => {
        return axiosInstance.put(`/reply_comments/${id}`, replyDto)
            .then(response => dispatch(updateReplySuccess(response.data)))
            .catch(error => dispatch(updateReplyFailure(error.message)));
    };
};

export const deleteReply = (id) => {
    return dispatch => {
        return axiosInstance.delete(`/reply_comments/${id}`)
            .then(() => dispatch(deleteReplySuccess(id)))
            .catch(error => dispatch(deleteReplyFailure(error.message)));
    };
};
