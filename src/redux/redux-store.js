import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';

let reduser = combineReducers({
    pageProfile: profileReducer,
    pageDialogs: dialogsReducer,
    navBarList: navBarReducer,
    pageUsers: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(reduser, applyMiddleware(thunkMiddleware));
//
window.store = store;
//

export default store;