import PageUsers from './pageUsers';
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC} from '../../redux/usersReducer';


let mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.pageUsers.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}

const UsersWrapper = connect(mapStateToProps, mapDispatchToProps)(PageUsers);


export default UsersWrapper;