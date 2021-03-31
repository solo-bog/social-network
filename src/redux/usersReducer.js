import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const setFollowStatusHelper = (users, userId, followed) => users.map((u) => {
  const user = u;
  if (user.id === userId) {
    user.followed = followed;
  }
  return user;
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: setFollowStatusHelper(state.users, action.userId, true),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: setFollowStatusHelper(state.users, action.userId, false),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROCESS: {
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROCESS, isFollowing, userId });

export const getUsersRequest = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  try {
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(toggleIsFetching(false));
  }
};

export const followAccept = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  try {
    const data = await usersAPI.followRequest(userId);
    if (data.resultCode === 0) {
      dispatch(follow(userId));
    }
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(toggleFollowingProgress(false, userId));
  }
};
export const unfollowAccept = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  try {
    const data = await usersAPI.unfollowRequest(userId);
    if (data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(toggleFollowingProgress(false, userId));
  }
};

export default usersReducer;
