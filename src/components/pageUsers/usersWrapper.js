import PageUsers from './pageUsers';
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC} from '../../redux/usersReducer';


let mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.pageUsers.users,
        pageSize: state.pageUsers.pageSize,
        totalUsersCount: state.pageUsers.totalUsersCount,
        currentPage: state.pageUsers.currentPage,
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
    }
}

const UsersWrapper = connect(mapStateToProps, mapDispatchToProps)(PageUsers);


export default UsersWrapper;