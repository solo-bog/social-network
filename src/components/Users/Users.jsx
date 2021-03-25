import React from 'react'
import Preloader from "../Preloader/Preloader";
import UsersList from "./UsersList/UsersList";
import Pagination from "./../common/Pagination/Pagination"

const Users = (props) => {
    return (<div>
            <div>
                <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            </div>
            {props.isFetching ? <Preloader/> : <UsersList unfollowAccept={props.unfollowAccept} followAccept={props.followAccept} followingInProgress={props.followingInProgress} users={props.users} />}
        </div>
    )
}

export default Users