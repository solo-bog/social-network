import { ProfileAPI } from '../api/api';
import defaultPhoto from '../assets/images/user.svg';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    { id: 1, message: 'I like old films. They are atmospheres.', likesCount: 10 },
    { id: 2, message: 'Baron Corbin is my brother. He is cool dude.', likesCount: 12 },
    { id: 3, message: 'I am very happy girl.', likesCount: 32 },
    { id: 4, message: "Hi, i'm Alice. It is my first post in this network.", likesCount: 2 }],
  profile: {
    photos: {
      small: defaultPhoto,
      large: defaultPhoto,
    },
  },
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        message: action.postText,
        likesCount: 2,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case UPDATE_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }

    default:
      return state;
  }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const updateStatus = (status) => ({ type: UPDATE_USER_STATUS, status });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getProfile = (userId) => async (dispatch) => {
  const data = await ProfileAPI.getProfileInfo(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  const data = await ProfileAPI.getStatus(userId);
  dispatch(updateStatus(data));
};

export const updateProfileStatus = (text) => async (dispatch) => {
  const data = await ProfileAPI.updateStatus(text);
  if (data.resultCode === 0) {
    dispatch(updateStatus(text));
  } else {
    console.log(`error:${data.messages}`);
  }
};

export const uploadPhoto = (photoFile) => async (dispatch, getState) => {
  try {
    const data = await ProfileAPI.uploadPhoto(photoFile);
    if (data.resultCode === 0) {
      dispatch(getProfile(getState().profilePage.profile.userId));
    }
  } catch (e) {
    console.log(e);
  }
};

export default profileReducer;
