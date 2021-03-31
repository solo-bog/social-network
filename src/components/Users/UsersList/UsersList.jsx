import React from 'react';
import UsersListElement from './UsersListElement';

const UsersList = ({
  users, unfollowAccept, followAccept, followingInProgress,
}) => (
  <div>
    {
        users.map((u) => (
          <UsersListElement
            key={u.id}
            user={u}
            unfollowAccept={unfollowAccept}
            followAccept={followAccept}
            followingInProgress={followingInProgress}
          />
        ))
    }
  </div>
);

export default UsersList;
