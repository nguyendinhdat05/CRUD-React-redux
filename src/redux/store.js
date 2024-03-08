import {configureStore} from "@reduxjs/toolkit";
import studentReducer from "./students/studentsSlice";
import userReducer from "./users/usersSlice";

export let store = configureStore({
    reducer : {
        students:studentReducer,
        user : userReducer,
    }
})