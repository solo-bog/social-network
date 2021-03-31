import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ profile, status, updateProfileStatus }) => (
  <div>
    <ProfileInfo profile={profile} status={status} updateProfileStatus={updateProfileStatus} />
    <MyPostsContainer />
  </div>
);

export default Profile;
