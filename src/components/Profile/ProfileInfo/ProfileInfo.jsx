import React from 'react'
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return(
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div>
                <ProfileStatusHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;