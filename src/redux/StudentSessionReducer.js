import {FETCH_ALL_STUDENT_SESSIONS_SUCCESS} from "./actionTypes.js";

const initialState = {
    courseSessions: [],
    loading: true,
    error: null
};

const studentSessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_STUDENT_SESSIONS_SUCCESS:
            return {
                ...state,
                studentSessions: action.payload,
                loading: false,
                error: null
            };
        // Add more cases for other action types as needed
        default:
            return state;
    }
};

export default studentSessionReducer;
