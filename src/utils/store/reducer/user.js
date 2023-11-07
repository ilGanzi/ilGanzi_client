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
        },
        setAccessToken: (state, action) => {
            state.value.accessToken = action.payload.accessToken;
        },
    }
});

export default user.reducer;

export const { login, setAccessToken, logout } = user.actions;