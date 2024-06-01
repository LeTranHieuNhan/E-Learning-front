import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer.js";
import authReducer from "./authReducer.js";
import studentSessionReducer from './StudentSessionReducer.js';

const store = configureStore({
    reducer : {
        course: rootReducer,
        auth: authReducer,
        studentSessions : studentSessionReducer
    }

});

export { store };
export default store;
