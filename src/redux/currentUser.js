import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = {};

const slice = createSlice({
    name: "currentUser",
    initialState: initialState,
    reducers: {
        changeUser: (user, action)=> {
            user.username = action.payload.username
            user.email = action.payload.email
            user.role = action.payload.role
            user.wallet= action.payload.wallet
        },
        updateUserWallet: (user, action)=> {
            user.wallet = action.payload.wallet
        }
    }
})

export const { changeUser, updateUserWallet } = slice.actions;
export default slice.reducer;