import React from 'react'
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return(
        <div>
            {/* <div className={s.profile_img}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="background"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div>
                <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;