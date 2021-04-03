import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reduser = combineReducers({
    pageProfile: profileReducer,
    pageDialogs: dialogsReducer,
    navBarList: navBarReducer,
    pageUsers: usersReducer,
    auth: authReducer,
});

let store = createStore(reduser, applyMiddleware(thunkMiddleware));
//
window.store = store;
//

export default store;