import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirect = (Component) => {
  const wrappComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component />;
  };
  return connect(mapStateToProps)(wrappComponent);
};

export default withAuthRedirect;
