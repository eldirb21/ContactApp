import {combineReducers} from 'redux';
import contactReducer from './contact.reducer';

const rootReducers = combineReducers({
  contacts: contactReducer,
});

export default rootReducers;
