import { connect } from 'react-redux';
import React from 'react';
import {setCurrentPage, getUsers, setFollow, setUnfollow} from '../../redux/usersReducer';
import PageUsers from './pageUsers';
import Preloader from '../common/preloader/preloader';


class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

let mapStateToProps = (state) => {
    //console.log(state);
    return {
        users: state.pageUsers.users,
        pageSize: state.pageUsers.pageSize,
        totalUsersCount: state.pageUsers.totalUsersCount,
        currentPage: state.pageUsers.currentPage,
        isFetching: state.pageUsers.isFetching,
        followingIsProgress: state.pageUsers.followingIsProgress,
    }
}

export default connect(mapStateToProps, {setCurrentPage, getUsers, setFollow, setUnfollow})(UsersContainer);


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
