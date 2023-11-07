import { combineReducers } from 'redux';
import user from './reducer/user'; // 세부 reducer

const reducers = combineReducers({ user });

export default reducers;