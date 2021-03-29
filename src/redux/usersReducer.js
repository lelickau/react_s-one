const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET-USERS';


let initialState = {
    users: [
        
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
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

export default usersReducer;