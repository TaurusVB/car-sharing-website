import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
