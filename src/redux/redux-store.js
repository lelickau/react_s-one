import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';

let reduser = combineReducers({
    pageProfile: profileReducer,
    pageDialogs: dialogsReducer,
    navBarList: navBarReducer,
});

let store = createStore(reduser);

export default store;