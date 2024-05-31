// userActions.js
import * as actionTypes from './actionTypes';
import axiosInstance from './axiosInstance';

// Fetch user
export const fetchUserSuccess = (user) => ({
    type: actionTypes.FETCH_USER_SUCCESS,
    user
});

export const fetchUserFailure = (error) => ({
    type: actionTypes.FETCH_USER_FAILURE,
    error
});

export const fetchUser = () => {
    return dispatch => {
        axiosInstance.get('/users')
            .then(response => dispatch(fetchUserSuccess(response.data)))
            .catch(error => dispatch(fetchUserFailure(error.message)));
    };
};

// Create user
export const createUserSuccess = (user) => ({
    type: actionTypes.CREATE_USER_SUCCESS,
    user
});
export const fetchUserByIdSuccess = (user) => ({
    type: actionTypes.FETCH_USER_BY_ID_SUCCESS,
    user
});

// Action creator for failed user fetch by ID
export const fetchUserByIdFailure = (error) => ({
    type: actionTypes.FETCH_USER_BY_ID_FAILURE,
    error
});

// Thunk for fetching user by ID
export const fetchUserById = (userId) => {
    return dispatch => {
        axiosInstance.get(`/users/${userId}`)
            .then(response => dispatch(fetchUserByIdSuccess(response.data)))
            .catch(error => dispatch(fetchUserByIdFailure(error.message)));
    };
};
export const createUserFailure = (error) => ({
    type: actionTypes.CREATE_USER_FAILURE,
    error
});

export const createUser = (userData) => {
    return dispatch => {
        axiosInstance.post('/users', userData)
            .then(response => dispatch(createUserSuccess(response.data)))
            .catch(error => dispatch(createUserFailure(error.message)));
    };
};

// Update user
export const updateUserSuccess = (user) => ({
    type: actionTypes.UPDATE_USER_SUCCESS,
    user
});

export const updateUserFailure = (error) => ({
    type: actionTypes.UPDATE_USER_FAILURE,
    error
});

export const updateUser = (userId, userData) => {
    return dispatch => {
        axiosInstance.put(`/users/${userId}`, userData)
            .then(response => dispatch(updateUserSuccess(response.data)))
            .catch(error => dispatch(updateUserFailure(error.message)));
    };
};

// Delete user
export const deleteUserSuccess = (userId) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    userId
});

export const deleteUserFailure = (error) => ({
    type: actionTypes.DELETE_USER_FAILURE,
    error
});

export const deleteUser = (userId) => {
    return dispatch => {
        axiosInstance.delete(`/users/${userId}`)
            .then(() => dispatch(deleteUserSuccess(userId)))
            .catch(error => dispatch(deleteUserFailure(error.message)));
    };
};

// Logout user
export const logoutUser = () => ({
    type: actionTypes.LOGOUT_USER
});
export const fetchTeacherProfileSuccess = (user) => ({
    type: actionTypes.FETCH_TEACHER_PROFILE_SUCCESS,
    user
});

export const fetchTeacherProfileFailure = (error) => ({
    type: actionTypes.FETCH_TEACHER_PROFILE_FAILURE,
    error
});

export const fetchTeacherProfile = (teacherId) => {
    return dispatch => {
        axiosInstance.get(`/users/teacher/${teacherId}`)
            .then(response => dispatch(fetchTeacherProfileSuccess(response.data)))
            .catch(error => dispatch(fetchTeacherProfileFailure(error.message)));
    };
};