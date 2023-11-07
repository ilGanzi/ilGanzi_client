import { combineReducers } from 'redux';
import user from './reducer/user'; // 세부 reducer
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const reducers = combineReducers({ user });
const persistedReducer = persistReducer(persistConfig,reducers);

const store = configureStore({
    reducer: persistedReducer,
})


export default store;