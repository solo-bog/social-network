import React from 'react';
import Preloader from '../Preloader/Preloader';
import UsersList from './UsersList/UsersList';
import Pagination from '../common/Pagination/Pagination';

const Users = ({
  totalUsersCount, pageSize, currentPage,
  onPageChanged, isFetching, unfollowAccept,
  followAccept, followingInProgress, users,
}) => (
  <div>
    <div>
      <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
    </div>
    {isFetching
      ? <Preloader />
      : <UsersList unfollowAccept={unfollowAccept} followAccept={followAccept} followingInProgress={followingInProgress} users={users} />}
  </div>
);

export default Users;
