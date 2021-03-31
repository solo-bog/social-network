import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '4d15cfab-86d6-416c-b19b-dc3aef73fd8b',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followRequest(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollowRequest(userId) {
    return instance.delete(`follow/${userId}`).then((response) => response.data);
  },
};

export const ProfileAPI = {
  getProfileInfo(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status }).then((response) => response.data);
  },
  uploadPhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile.files[0]);
    return instance.post('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => response.data);
  },
};

export const AuthAPI = {
  getAuthStatus() {
    return instance.get('auth/me').then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe }).then((response) => response.data);
  },
  logout() {
    return instance.delete('auth/login').then((response) => response.data);
  },

};
