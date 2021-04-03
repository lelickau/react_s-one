import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {post:'Hello Tom' , id:1, likesCount: 0},
        {post:'hi Tom How are you?' , id:2, likesCount: 0},
        {post:'hi Tom What do you do?' , id:3, likesCount: 0},
        {post:'hi Tom I am fine' , id:4, likesCount: 0},
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            
            return {
                ...state,
                posts: [
                    ...state.posts, 
                    {
                        post: state.newPostText, 
                        id: 7, 
                        likesCount: 0,
                    }
                ],
                newPostText: '',
            }

        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText,
            }

        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile,
            }

        default:
            return state;
    } 
}

export let addPostActionCreater = () => ({type: ADD_POST});
export let updateNewPostActionCreater = (text) => ({type: UPDATE_NEW_POST, newText: text});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;