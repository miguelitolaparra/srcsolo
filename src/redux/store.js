import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import noteReducer from './reducers/noteReducer';
import profileReducer from './reducers/profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  notes: noteReducer,
  profile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
