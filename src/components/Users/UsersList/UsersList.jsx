import React from 'react'
import UsersListElement from "./UsersListElement";

const UsersList = (props) => {
    return <div>
        {
            props.users.map(u => <UsersListElement key={u.id} user={u} unfollowAccept={props.unfollowAccept} followAccept={props.followAccept} followingInProgress={props.followingInProgress}/>)
        }
    </div>

}

export default UsersList;