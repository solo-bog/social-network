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

export const followRequest = (userId) => {
    return instance.post(`follow/${userId}`).then(response => response.data)
}

export const unfollowRequest = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => response.data)
}

export const ProfileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/`+userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status:status}).then(response => response.data)
    }
}
export const getProfileInfo = (userId) => {
    return instance.get(`profile/status/`+userId).then(response => response.data)
}

export const AuthAPI ={
    getAuthStatus()  {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email,password,rememberMe=false)  {
        return instance.post(`auth/login`,{email,password,rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }

}
