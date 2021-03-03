import React from 'react'
import styles from './Users.module.css'
import Preloader from "../Preloader/Preloader";
import UsersList from "./UsersList/UsersList";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for(let i=0; i<pagesCount; i++) {
        pages.push(i + 1);
    }
    let pagination = [];
    for(let i = props.currentPage-1;(i<props.currentPage+4)&&(i<pagesCount);i++){
        if(i===0){
            continue;
        }
        pagination.push(<span key={i} onClick={(e) => {
            props.onPageChanged(i)
        }} className={`${styles.pageNumber}  ${props.currentPage === i ? styles.selectedPage : ''}`}>{i}</span>)
    }
    pagination.push(<span key={0}>...</span>);
    return (<div>
            <div>
                {
                    pagination
                }


            </div>
            {props.isFetching ? <Preloader/> : <UsersList unfollowAccept={props.unfollowAccept} followAccept={props.followAccept} followingInProgress={props.followingInProgress} users={props.users} />}


        </div>
    );


}


export default Users;