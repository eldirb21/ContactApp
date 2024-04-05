import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import rootReducers from '../reducers';

const stores = configureStore({reducer: rootReducers}, applyMiddleware(thunk));

export default stores;
