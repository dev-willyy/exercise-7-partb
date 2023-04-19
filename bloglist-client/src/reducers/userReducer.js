import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import blogService from "../services/blogs";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload;
        },
        clearUser(state) {
            return null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export const login = (credentials) => async (dispatch) => {
    try {
        const user = await loginService.login(credentials);
        window.localStorage.setItem("loggedInUser", JSON.stringify(user));
        blogService.setToken(user.token);
        dispatch(setUser(user));
    } catch (error) {
        console.error(error);
    }
};

export const logout = () => async (dispatch) => {
    window.localStorage.removeItem("loggedInUser");
    dispatch(clearUser());
    blogService.setToken(null);
};

export default userSlice.reducer;
