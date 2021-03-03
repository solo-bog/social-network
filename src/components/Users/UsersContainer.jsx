import React from 'react'
import {
    followAccept, getUsers,
    setCurrentPage,
    unfollowAccept
} from "../../redux/usersReducer";
import {connect} from "react-redux"
import Users from "./Users"

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber,this.props.pageSize)
    }
    render(){
        return <Users unfollowAccept={this.props.unfollowAccept} followAccept={this.props.followAccept} followingInProgress={this.props.followingInProgress} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} isFetching={this.props.isFetching} onPageChanged={this.onPageChanged} />
    }

}

const mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}



export default connect(mapStateToProps, {setCurrentPage,getUsers,followAccept,unfollowAccept})(UsersContainer);
