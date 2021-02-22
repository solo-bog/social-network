import React from 'react'
import styles from './Users.module.css'

const Users = (props) =>{

    let loadUsers = () => {
        let data = [{id:1,photo: "https://hornews.com/upload/images/akter.jpeg",followed:true, fullName:"Andrey", status: "I'm a boss", location:{city:"Kiev",country:"Ukraine"}},
            {id:2,photo:"https://ona-znaet.ru/_pu/19/72349760.jpg", followed:false, fullName:"Oleg", status: "I'm a tomato", location:{city:"Berlin",country:"Germany"}},
            {id:3,photo:"https://www.infoniac.ru/upload/medialibrary/2af/2af1c4e727bb59f7b8ac632cd343d594.jpg", followed:false, fullName:"Anton", status: "I'm a rabbit", location:{city:"Rome",country:"Italy"}},
            {id:4,photo:"https://d2p8jjwwnx090z.cloudfront.net/566/203/371/-69996995-1t7nemh-jdhb82ra01be6bk/original/COhrPJYTohM.jpg", followed:true, fullName:"Sofia", status: "I'm a cat", location:{city:"Lutsk",country:"Ukraine"}}
        ];
        props.setUsers(data)
    }
    let users = props.users.map(u => <div className={styles.userItem}>
            <div className={styles.userPhoto}><img src={u.photo} alt=""/></div>
            <div className={styles.userActionBtn}>
                {u.followed
                    ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                }
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userName}>{u.fullName}</div>
                <div className={styles.userStatus}>{u.status}</div>
                <div className={styles.userCity}>{u.location.city}</div>
                <div className={styles.userCountry}>{u.location.country}</div>
            </div>
        </div>

    );



    return <div>
        <div className="usersList">
            {users}
        </div>
        <div className="loadMoreBtn">
            <button onClick={loadUsers}>Load More</button>
        </div>
    </div>

}

export default Users;