import {createSelector} from "reselect";

export const getUsers = state => state.usersPage.users
export const getPageSize = state => state.usersPage.pageSize
export const getTotalUsersCount = state => state.usersPage.totalUsersCount
export const getCurrentPage = state => state.usersPage.currentPage
export const getIsFetching = state => state.usersPage.isFetching
export const getFollowingInProgress = state => state.usersPage.followingInProgress
export const exampleSelector = createSelector(getUsers,users => users.filter(u=> true))

