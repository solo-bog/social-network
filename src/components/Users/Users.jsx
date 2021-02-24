import React from 'react'
import styles from './Users.module.css'
import userImage from '../../assets/images/user.svg'

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
        pagination.push(<span onClick={(e) => {
            props.onPageChanged(i)
        }} className={`${styles.pageNumber}  ${props.currentPage === i ? styles.selectedPage : ''}`}>{i}</span>)
    }
    pagination.push(<span>...</span>);
    return (<div>
            <div>
                {
                    pagination
                }


            </div>
            <div className="usersList">
                {
                    props.users.map(u => <div key={u.id} className={styles.userItem}>
                        <div className={styles.userPhoto}><img
                            src={u.photos.small != null ? u.photos.small : userImage} alt=""/></div>
                        <div className={styles.userActionBtn}>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                        <div className={styles.userInfo}>
                            <div className={styles.userName}>{u.name}</div>
                        </div>
                    </div>)
                }
            </div>
            <div className="loadMoreBtn">
                <button>Load More</button>
            </div>
        </div>
    );


}


export default Users;