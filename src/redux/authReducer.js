import { authAPI, securityAPI } from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
        case GET_CAPTCHA_URL_SUCCESS: 
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});


export const setAuth = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuth();
        if(data.resultCode === 0){
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
            if(response.data.resultCode === 0){
                dispatch(setAuth());
            }  else {
                if (response.data.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
                dispatch(stopSubmit('login', {_error: message}));
            }
            //console.log(response.data);
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
            if(data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false));
            }
    }
}

export default authReducer;