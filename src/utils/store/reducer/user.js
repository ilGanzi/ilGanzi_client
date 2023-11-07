import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { 
    value: {
        isAuthorized: false,
        email: '',
        password: '',
        accessToken: '' 
        }
     };

export const user = createSlice({
    name: 'user',
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        }
    }
});

export default user.reducer;

export const { login, saveUserInfo, logout } = user.actions;