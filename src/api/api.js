import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        "API-KEY":'f317a11f-4f51-4707-9cbe-dc9584cde29a'
    }
});

export const usersAPI = {
    getUsers (currentPage,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const follow = (userId) => {
    return instance.post(`follow/${userId}`).then(response => response.data)
}

export const unfollow = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => response.data)
}

export const getProfileInfo = (userId) => {
    return instance.get(`profile/`+userId).then(response => response.data)
}