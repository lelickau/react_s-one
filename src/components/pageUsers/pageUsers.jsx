import React from 'react';
import Paginator from '../common/paginator/paginator';
import User from './user';

let PageUsers = ({totalUsersCount, pageSize, currentPage, onPageChanged, followingIsProgress, setFollow, setUnfollow, ...props}) => {
    
    return (<div>
            {
            props.users.map( user => <User 
                user={user} 
                key={user.id} 
                followingIsProgress={followingIsProgress} 
                setFollow={setFollow} 
                setUnfollow={setUnfollow} />)}
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
        </div>)
        
}

export default PageUsers;