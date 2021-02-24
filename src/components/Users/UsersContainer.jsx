import React from 'react'
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }
    render(){
        return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow}/>
    }

}

const mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(usersCount) =>{
            dispatch(setTotalUsersCountAC(usersCount))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
