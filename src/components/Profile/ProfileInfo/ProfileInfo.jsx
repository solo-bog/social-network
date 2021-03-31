import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = ({ profile, status, updateProfileStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <div>
        <img src={profile.photos.large} alt="" />
      </div>
      <div>
        <ProfileStatusHooks status={status} updateProfileStatus={updateProfileStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
