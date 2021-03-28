import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReducer from './usersReducer';

let reduser = combineReducers({
    pageProfile: profileReducer,
    pageDialogs: dialogsReducer,
    navBarList: navBarReducer,
    pageUsers: usersReducer,
});

let store = createStore(reduser);

export default store;