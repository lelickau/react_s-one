

export const getUsers = (state) => {
    return state.pageUsers.users;
}

export const getPageSize = (state) => {
    return state.pageUsers.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.pageUsers.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.pageUsers.currentPage;
}

export const getIsFetching = (state) => {
    return state.pageUsers.isFetching;
}

export const getFollowingIsProgress = (state) => {
    return state.pageUsers.followingIsProgress;
}