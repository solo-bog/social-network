import React from 'react'
import Profile from './Profile'
import {connect} from "react-redux";
import {getProfile, getStatus, updateProfileStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.myId
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render(){
        return (<Profile profile={this.props.profile} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}/>)
    }

}

let mapStateToProps = (state) =>({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    myId:state.auth.userId
});


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{getProfile,getStatus,updateProfileStatus}),
    withRouter
)(ProfileContainer)
