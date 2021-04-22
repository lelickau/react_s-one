import { profileAPI } from "../api/api";
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
    posts: [
        {post:'Hello Tom' , id:1, likesCount: 0},
        {post:'hi Tom How are you?' , id:2, likesCount: 0},
        {post:'hi Tom What do you do?' , id:3, likesCount: 0},
        {post:'hi Tom I am fine' , id:4, likesCount: 0},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            return {
                ...state,
                posts: [
                    ...state.posts, 
                    {
                        post: action.newPostText, 
                        id: 7, 
                        likesCount: 0,
                    }
                ],
            }

        case DELETE_POST: 
        return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        case SAVE_PHOTO_SUCCESS: 
        return {...state, profile: {...state.profile, photos: action.photos}}
        
        
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile,
            }
        
        case SET_STATUS: 
            return {
                ...state,
                status: action.status,
            }
        

        default:
            return state;
    } 
}

export let addPostActionCreater = (newPostText) => ({type: ADD_POST, newPostText});
export let deletePost = (postId) => ({type: DELETE_POST, postId});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_STATUS, status});
export let savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});


export const setProfile = (id) => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(id);
            dispatch(setUserProfile(data));
    }
}

export const getStatus = (id) => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(id);
            dispatch(setUserStatus(data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.updateStatus(status);
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file);
            if (data.resultCode === 0) {
                dispatch(savePhotoSuccess(data.data.photos));
            }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const data = await profileAPI.saveProfile(profile);
            if (data.resultCode === 0) {
                dispatch(setProfile(userId));
            } else {
                dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
                return Promise.reject(data.messages[0]);
            }
    }
}

export default profileReducer;