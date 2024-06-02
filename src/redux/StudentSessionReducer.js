import { FETCH_ALL_STUDENT_SESSIONS_SUCCESS, MARK_AS_WATCHED } from "./actionTypes";

const initialState = {
    studentSessions: [],
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
        case MARK_AS_WATCHED:
            return {
                ...state,
                studentSessions: state.studentSessions.map(session =>
                    session.courseSession.id === action.payload ? { ...session, status: 'WATCHED' } : session
                )
            };
        default:
            return state;
    }
};

export default studentSessionReducer;
