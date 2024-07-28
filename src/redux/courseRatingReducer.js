import {
    CREATE_COURSE_RATING_SUCCESS, DELETE_COURSE_RATING_SUCCESS,
    FETCH_COURSE_RATING_BY_ID_SUCCESS,
    FETCH_COURSE_RATINGS_BY_COURSE_ID_SUCCESS,
    FETCH_COURSE_RATINGS_SUCCESS, UPDATE_COURSE_RATING_SUCCESS
} from "./actionTypes.js";


const initialState = {
    courseRatings: [],
    courseRating: null,
};

export const courseRatingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSE_RATINGS_SUCCESS:
            return { ...state, courseRatings: action.payload };
        case FETCH_COURSE_RATING_BY_ID_SUCCESS:
            return { ...state, courseRating: action.payload };
        case FETCH_COURSE_RATINGS_BY_COURSE_ID_SUCCESS:
            return { ...state, courseRatings: action.payload };
        case CREATE_COURSE_RATING_SUCCESS:
            return { ...state, courseRatings: [...state.courseRatings, action.payload] };
        case UPDATE_COURSE_RATING_SUCCESS:
            return {
                ...state,
                courseRatings: state.courseRatings.map(rating =>
                    rating.id === action.payload.id ? action.payload : rating
                ),
            };
        case DELETE_COURSE_RATING_SUCCESS:
            return {
                ...state,
                courseRatings: state.courseRatings.filter(rating => rating.id !== action.payload),
            };
        default:
            return state;
    }
};
