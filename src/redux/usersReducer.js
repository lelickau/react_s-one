const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET-USERS';
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE-IS-FETCHING';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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

        case FOLLOW: 
        return {
            ...state,
            users: state.users.map(user => {
                if(user.id === action.userid) {
                    return {...user, followed: true};
                } return user;
            })
        }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userid) {
                        return {...user, followed: false}
                    } return user;
                })
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

export default usersReducer;