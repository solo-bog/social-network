import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from './Profile';
import { getProfile, getStatus, updateProfileStatus } from '../../redux/profileReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const {
      match, myId, getProfile, getStatus,
    } = this.props;
    const userId = match.params.userId || myId;
    getProfile(userId);
    getStatus(userId);
  }

  render() {
    const {
      profile, status, updateProfileStatus,
    } = this.props;
    return (<Profile profile={profile} status={status} updateProfileStatus={updateProfileStatus} />);
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myId: state.auth.userId,
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getProfile, getStatus, updateProfileStatus }),
  withRouter,
)(ProfileContainer);
