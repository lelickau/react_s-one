const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET-USERS';
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
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

export let followAC = (userid) => ({type: FOLLOW, userid});
export let unfollowAC = (userid) => ({type: UNFOLLOW, userid});
export let setUsersAC = (users) => ({type: SET_USERS, users});
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export let setTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count:totalUsersCount});

export default usersReducer;