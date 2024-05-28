// rootReducer.js
import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authReducer from "./authReducer.js";
import userReducer from "./userReducer.js";

const rootReducer = combineReducers({
    course: courseReducer,
    auth: authReducer,
    user : userReducer

});

export default rootReducer;
