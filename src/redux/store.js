import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer.js";
import authReducer from "./authReducer.js";

const store = configureStore({
    reducer : {
        course: rootReducer,
        auth: authReducer
    }

});

export { store };
export default store;
