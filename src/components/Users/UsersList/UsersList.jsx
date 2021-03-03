import React from 'react'
import styles from './UsersList.module.css'
import userImage from "../../../assets/images/user.svg";
import {NavLink} from "react-router-dom";
import {followRequest, unfollowRequest} from "../../../api/api";
import {followAccept} from "../../../redux/usersReducer";

const UsersList = (props) => {
    return <div className="usersList">
        {
            props.users.map(u => <div key={u.id} className={styles.userItem}>
                <div className={styles.userPhoto}><NavLink to={"/profile/"+u.id}><img
                    src={u.photos.small != null ? u.photos.small : userImage} alt=""/></NavLink></div>
                <div className={styles.userActionBtn}>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollowAccept(u.id)
                        }} disabled={props.followingInProgress.some(id => id===u.id)}>Unfollow</button>
                        : <button onClick={() => {
                            props.followAccept(u.id)
                        }} disabled={props.followingInProgress.some(id => id === u.id)}>Follow</button>
                    }
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>{u.name}</div>
                </div>
            </div>)
        }
    </div>

}

export default UsersList;