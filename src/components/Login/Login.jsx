import React from 'react'
import { Form, Field } from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {maxLength, minLength, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css'
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)



const LoginForm = (props) => {
    return <Form onSubmit ={async (value) =>await props.login(value.email,value.password,value.rememberMe)} render={
        ({submitError, handleSubmit, submitting}) => {
       return  <form onSubmit={handleSubmit}>
        <div>
        <Field validate={composeValidators(required, maxLength(20), minLength(5))} placeholder={"Email"} name={"email"} component={Input} />
        </div>
        <div>
        <Field validate={composeValidators(required, maxLength(20), minLength(6))} placeholder={"Password"} name={"password"} type='password' component={Input} />
        </div>
        <div>
        <Field  name="rememberMe" id='rememberMe' component={"input"}  type={"checkbox"}/> <label htmlFor='rememberMe'> remember me</label>
        </div>
        <div>
        {props.formError && <div className={styles.errorText}>{props.formError}</div>}
        </div>
        <div>
        <button type='submit' disabled={submitting}>Login</button>
        </div>
        </form>
    }
    } />

}

const Login = (props) => {
    if(props.isAuth) return <Redirect to={`/profile`}/>
    return <div>
        <h1>Login</h1>
        <LoginForm formError={props.formError} login={props.login}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    formError:state.auth.formError
})
export default connect(mapStateToProps,{login})(Login)