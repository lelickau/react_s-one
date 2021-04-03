import * as axios from 'axios';

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b47105f6-985a-485c-b2ae-776717be35f2'},
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
    })},

    deleteUsersUnfollow(userId) {
        return instans.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
    })},

    postUsersFollow(userId) {
        return instans.post(`follow/${userId}`, {})
            .then(response => {
                return response.data;
    })},
}

export const authAPI = {
    getAuth() {
        return instans.get(`auth/me`)
            .then(response => {
                return response.data;
            })},
}

export const profileAPI = {
    getProfile(userId) {
        return instans.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })},
}
