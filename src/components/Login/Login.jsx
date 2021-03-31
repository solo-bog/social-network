import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLength, minLength, required } from '../../utils/validators/validators';
import { login } from '../../redux/authReducer';
import styles from '../common/FormsControls/FormsControls.module.css';

const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);

const LoginForm = ({ loginRequest, formError }) => (
  <Form
    onSubmit={async (value) => loginRequest(value.email, value.password, value.rememberMe)}
    render={
        ({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field validate={composeValidators(required, maxLength(20), minLength(5))} placeholder="Email" name="email" component={Input} />
            </div>
            <div>
              <Field validate={composeValidators(required, maxLength(20), minLength(6))} placeholder="Password" name="password" type="password" component={Input} />
            </div>
            <div>
              <Field name="rememberMe" id="rememberMe" component="input" type="checkbox" />
              {' '}
              <span htmlFor="rememberMe"> remember me</span>
            </div>
            <div>
              {formError && <div className={styles.errorText}>{formError}</div>}
            </div>
            <div>
              <button type="submit" disabled={submitting}>Login</button>
            </div>
          </form>
        )
    }
  />
);

const Login = ({ isAuth, formError, loginRequest }) => {
  if (isAuth) return <Redirect to="/profile" />;
  return (
    <div>
      <h1>Login</h1>
      <LoginForm formError={formError} loginRequest={loginRequest} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  formError: state.auth.formError,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (email, password, rememberMe) => dispatch(login(email, password, rememberMe)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
