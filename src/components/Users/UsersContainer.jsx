import React from 'react'
import {
    followAccept, getUsersRequest,
    setCurrentPage,
    unfollowAccept
} from "../../redux/usersReducer";
import {connect} from "react-redux"
import Users from "./Users"
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "./users-selectors";

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.getUsersRequest(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersRequest(pageNumber,this.props.pageSize)
    }
    render(){
        return <Users unfollowAccept={this.props.unfollowAccept} followAccept={this.props.followAccept} followingInProgress={this.props.followingInProgress} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users} isFetching={this.props.isFetching} onPageChanged={this.onPageChanged} />
    }

}

const mapStateToProps = (state) =>{
    return{
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}



export default connect(mapStateToProps, {setCurrentPage, getUsersRequest,followAccept,unfollowAccept})(UsersContainer);
