import { combineReducers } from 'redux';
import sessionReducer from './reducers/session/sessionReducer';
import loadingReducer from './reducers/loading/loadingReducer';
export default combineReducers({
    session:sessionReducer,
    loading:loadingReducer
});