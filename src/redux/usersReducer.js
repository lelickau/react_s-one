import { usersAPI } from '../api/api';
import {updateObjectInArray} from '../utils/objectsHelpers';
const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET-USERS';
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, 
                followingIsProgress: action.isFetching 
                ? [...state.followingIsProgress, action.userId] 
                : state.followingIsProgress.filter(id => id !== action.userId)
            }
        }

        case FOLLOW: 
        return {
            ...state,
            users: updateObjectInArray(state.users, action.userid, 'id', {followed: true}),
        }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userid, 'id', {followed: false}),
            }

        default:
            return state;
    }
}

export let follow = (userid) => ({type: FOLLOW, userid});
export let unfollow = (userid) => ({type: UNFOLLOW, userid});
export let setUsers = (users) => ({type: SET_USERS, users});
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export let setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count:totalUsersCount});
export let setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let setFollowingIsProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
    dispatch(setFetching(true));
    dispatch(setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);
            dispatch(setFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
}} 

const folowUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(setFollowingIsProgress(true, id));
            const data = await apiMethod(id);
                if(data.resultCode === 0) {
                    dispatch(actionCreator(id));
                };
                dispatch(setFollowingIsProgress(false, id));
}

export const setFollow = (id) => {
    return async (dispatch) => {
        folowUnfollowFlow(dispatch, id, usersAPI.deleteUsersUnfollow.bind(usersAPI), unfollow);
    }
}

export const setUnfollow = (id) => {
    return async (dispatch) => {
        folowUnfollowFlow(dispatch, id, usersAPI.postUsersFollow.bind(usersAPI), follow);
    }
}

export default usersReducer;