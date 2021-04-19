import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

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
        return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        
        
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

export default profileReducer;