import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        loginHandler(state) {
            state.isLoggedIn = true;
        },

        logoutHandler(state) {
            state.isLoggedIn = false;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;