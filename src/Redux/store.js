import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/courseSlice";
import RazorpaySlice from "./Slices/RazorpaySlice";

const store = configureStore({
    reducer:{
        auth: authSliceReducer,
        course: CourseSliceReducer,
        razorpay: RazorpaySlice
    },
    devTools: true
});

export default store;