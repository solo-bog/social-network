import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateProfileStatus} from "../../redux/profileReducer";
const Profile = (props) => {
    return(
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;