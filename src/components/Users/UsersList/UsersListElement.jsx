import React from "react";
import styles from "./UsersList.module.css";
import {NavLink} from "react-router-dom";
import userImage from "../../../assets/images/user.svg";


const UsersListElement = (props) => {
    return <div className={styles.userItem}>
        <div className={styles.userPhoto}><NavLink to={"/profile/"+props.user.id}><img
            src={props.user.photos.small != null ? props.user.photos.small : userImage} alt=""/></NavLink></div>
        <div className={styles.userActionBtn}>
            {props.user.followed
                ? <button onClick={() => {
                    props.unfollowAccept(props.user.id)
                }} disabled={props.followingInProgress.some(id => id===props.user.id)}>Unfollow</button>
                : <button onClick={() => {
                    props.followAccept(props.user.id)
                }} disabled={props.followingInProgress.some(id => id === props.user.id)}>Follow</button>
            }
        </div>
        <div className={styles.userInfo}>
            <div className={styles.userName}>{props.user.name}</div>
            <div>{props.user.status}</div>
        </div>
    </div>
}
export default UsersListElement