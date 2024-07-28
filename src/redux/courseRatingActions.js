import {
    FETCH_COURSE_RATINGS_SUCCESS,
    FETCH_COURSE_RATING_BY_ID_SUCCESS,
    CREATE_COURSE_RATING_SUCCESS,
    UPDATE_COURSE_RATING_SUCCESS,
    DELETE_COURSE_RATING_SUCCESS,
    FETCH_COURSE_RATINGS_BY_COURSE_ID_SUCCESS,
} from './actionTypes';
import axiosInstance from "./axiosInstance.js";

const API_URL = '/course_ratings';

export const fetchCourseRatings = () => async dispatch => {
    const response = await axiosInstance.get(API_URL);
    dispatch({ type: FETCH_COURSE_RATINGS_SUCCESS, payload: response.data });
};

export const fetchCourseRatingById = id => async dispatch => {
    const response = await axiosInstance.get(`${API_URL}/${id}`);
    dispatch({ type: FETCH_COURSE_RATING_BY_ID_SUCCESS, payload: response.data });
};

export const fetchCourseRatingsByCourseId = courseId => async dispatch => {
    const response = await axiosInstance.get(`${API_URL}/course_ratings/${courseId}`);
    dispatch({ type: FETCH_COURSE_RATINGS_BY_COURSE_ID_SUCCESS, payload: response.data });
};

export const createCourseRating = (courseId, userId, newCourseRating) => async dispatch => {
    const response = await axiosInstance.post(`${API_URL}/${courseId}/${userId}`, newCourseRating);
    dispatch({ type: CREATE_COURSE_RATING_SUCCESS, payload: response.data });
};

export const updateCourseRating = (id, updatedCourseRating) => async dispatch => {
    const response = await axiosInstance.put(`${API_URL}/${id}`, updatedCourseRating);
    dispatch({ type: UPDATE_COURSE_RATING_SUCCESS, payload: response.data });
};

export const deleteCourseRating = id => async dispatch => {
    await axiosInstance.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_COURSE_RATING_SUCCESS, payload: id });
};
