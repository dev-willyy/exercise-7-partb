import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./reducers/blogsReducer";
import userReducer from "./reducers/userReducer";
import notificationsReducer from "./reducers/notificationsReducer";

const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        user: userReducer,
        notifications: notificationsReducer,
    },
});

export default store;
