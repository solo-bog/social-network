import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow:(userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;