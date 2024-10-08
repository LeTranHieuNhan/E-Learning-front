// actionTypes.js

// Course actions
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export const GET_COURSE_BY_ID_SUCCESS = 'GET_COURSE_BY_ID_SUCCESS';
export const FETCH_TEACHER_COURSES_SUCCESS = 'FETCH_TEACHER_COURSES_SUCCESS'; // New action type
export  const FETCH_USER_ENROLLED_COURSES_SUCCESS = 'FETCH_USER_ENROLLED_COURSES_SUCCESS'; // New action type

// User actions
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS';
export const FETCH_USER_BY_ID_FAILURE = 'FETCH_USER_BY_ID_FAILURE';

// Teacher actions
export const FETCH_TEACHER_PROFILE_SUCCESS = 'FETCH_TEACHER_PROFILE_SUCCESS';
export const FETCH_TEACHER_PROFILE_FAILURE = 'FETCH_TEACHER_PROFILE_FAILURE';
export const FETCH_ALL_STUDENT_SESSIONS_SUCCESS = 'FETCH_ALL_STUDENT_SESSIONS_SUCCESS';
export const MARK_AS_WATCHED = 'MARK_AS_WATCHED';

// Comment actions
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
export const DELETE_ALL_COMMENTS_BY_COURSE_SESSION_SUCCESS = 'DELETE_ALL_COMMENTS_BY_COURSE_SESSION_SUCCESS';
export const DELETE_ALL_COMMENTS_BY_COURSE_SESSION_FAILURE = 'DELETE_ALL_COMMENTS_BY_COURSE_SESSION_FAILURE';
export const FETCH_REPLIES_SUCCESS = 'FETCH_REPLIES_SUCCESS';
export const FETCH_REPLIES_FAILURE = 'FETCH_REPLIES_FAILURE';
export const CREATE_REPLY_SUCCESS = 'CREATE_REPLY_SUCCESS';
export const CREATE_REPLY_FAILURE = 'CREATE_REPLY_FAILURE';
export const UPDATE_REPLY_SUCCESS = 'UPDATE_REPLY_SUCCESS';
export const UPDATE_REPLY_FAILURE = 'UPDATE_REPLY_FAILURE';
export const DELETE_REPLY_SUCCESS = 'DELETE_REPLY_SUCCESS';
export const DELETE_REPLY_FAILURE = 'DELETE_REPLY_FAILURE';


// Course Rating actions
export const FETCH_COURSE_RATINGS_SUCCESS = 'FETCH_COURSE_RATINGS_SUCCESS';
export const FETCH_COURSE_RATING_BY_ID_SUCCESS = 'FETCH_COURSE_RATING_BY_ID_SUCCESS';
export const CREATE_COURSE_RATING_SUCCESS = 'CREATE_COURSE_RATING_SUCCESS';
export const UPDATE_COURSE_RATING_SUCCESS = 'UPDATE_COURSE_RATING_SUCCESS';
export const DELETE_COURSE_RATING_SUCCESS = 'DELETE_COURSE_RATING_SUCCESS';
export const FETCH_COURSE_RATINGS_BY_COURSE_ID_SUCCESS = 'FETCH_COURSE_RATINGS_BY_COURSE_ID_SUCCESS';
