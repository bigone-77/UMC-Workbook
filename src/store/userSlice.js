import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: "",
    token: "",
    message: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userId = action.payload.userId;
            state.token = action.payload.token;
            state.message = action.payload.message;
        },
        removeUser: (state) => {
            state.userId = "";
            state.token = "";
            state.message = "";
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;