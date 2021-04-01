import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reduser = combineReducers({
    pageProfile: profileReducer,
    pageDialogs: dialogsReducer,
    navBarList: navBarReducer,
    pageUsers: usersReducer,
    auth: authReducer,
});

let store = createStore(reduser);
//
window.store = store;
//

export default store;