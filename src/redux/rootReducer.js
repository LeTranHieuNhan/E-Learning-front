// rootReducer.js
import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authReducer from "./authReducer.js";
import userReducer from "./userReducer.js";
import studentSessionReducer from "./StudentSessionReducer.js";

const rootReducer = combineReducers({
    course: courseReducer,
    auth: authReducer,
    user : userReducer,
    studentSession: studentSessionReducer,

});

export default rootReducer;
