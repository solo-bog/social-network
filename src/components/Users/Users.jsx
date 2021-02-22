import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios';
import userImage from '../../assets/images/user.svg'

class Users extends React.Component{
    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = () =>{
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render(){
       return <div>
        <div className="usersList">
            {
                this.props.users.map(u => <div key = {u.id} className={styles.userItem}>
                    <div className={styles.userPhoto}><img src={u.photos.small!=null?u.photos.small:userImage} alt=""/></div>
                    <div className={styles.userActionBtn}>
                        {u.followed
                            ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>{u.name}</div>
                    </div>
                </div>)
            }
        </div>
        <div className="loadMoreBtn">
            <button onClick={this.loadUsers}>Load More</button>
        </div>
    </div>

    }

}

export default Users;