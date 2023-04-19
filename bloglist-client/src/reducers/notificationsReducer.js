import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: null,
    reducers: {
        setNotification(state, action) {
            return action.payload;
        },
        removeNotification(state) {
            return null;
        },
    },
});

export const { setNotification, removeNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;
