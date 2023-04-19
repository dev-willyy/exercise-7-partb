import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const blogsSlice = createSlice({
    name: "blogs",
    initialState: [],
    reducers: {
        initBlogs(state, action) {
            return action.payload;
        },
        addBlog(state, action) {
            return [...state, action.payload];
        },
        updateBlog(state, action) {
            const updatedBlog = action.payload;
            return state.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog));
        },
        removeBlog(state, action) {
            const id = action.payload;
            return state.filter((blog) => blog.id !== id);
        },
    },
});

export const { initBlogs, addBlog, updateBlog, removeBlog } = blogsSlice.actions;

export const fetchBlogs = () => async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(initBlogs(blogs));
};

export const createBlog = (newBlog) => async (dispatch) => {
    const createdBlog = await blogService.create(newBlog);
    dispatch(addBlog(createdBlog));
};

export const updateExistingBlog = (updatedBlog) => async (dispatch) => {
    const returnedBlog = await blogService.update(updatedBlog);
    dispatch(updateBlog(returnedBlog));
};

export const removeBlogFromServer = (id) => async (dispatch) => {
    await blogService.remove(id);
    dispatch(removeBlog(id));
};

export default blogsSlice.reducer;
