import { combineReducers } from 'redux';
import authenticationReducer from './Authentication/authenticationReducer'

const rootReducer = combineReducers({
    Authentication: authenticationReducer,
    
});

export default rootReducer;