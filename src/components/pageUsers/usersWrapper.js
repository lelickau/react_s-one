import { connect } from 'react-redux';
import React from 'react';
import {setCurrentPage, requestUsers, setFollow, setUnfollow} from '../../redux/usersReducer';
import PageUsers from './pageUsers';
import Preloader from '../common/preloader/preloader';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingIsProgress } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {
    componentDidMount(){
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber,pageSize);
    }

    render(){
        return( 
        <> 
        {this.props.isFetching ? <Preloader/> : null}
            <PageUsers
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingIsProgress={this.props.followingIsProgress}
                setFollow={this.props.setFollow}
                setUnfollow={this.props.setUnfollow}
            />
        </>
        )
    }
}

// let mapStateToProps = (state) => {
//     //console.log(state);
//     return {
//         users: state.pageUsers.users,
//         pageSize: state.pageUsers.pageSize,
//         totalUsersCount: state.pageUsers.totalUsersCount,
//         currentPage: state.pageUsers.currentPage,
//         isFetching: state.pageUsers.isFetching,
//         followingIsProgress: state.pageUsers.followingIsProgress,
//     }
// }
let mapStateToProps = (state) => {
    //console.log(state);
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state),
    }
}

export default connect(mapStateToProps, {setCurrentPage, requestUsers, setFollow, setUnfollow})(UsersContainer);


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCount(totalCount));
//         },
//         setFetching: (isFetching) => {
//             dispatch(setFetching(isFetching))
//         },
//     }
// }
