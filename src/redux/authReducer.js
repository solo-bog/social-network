import {AuthAPI} from "../api/api";
// const action types
const SET_USER_DATA = 'SET_USER_DATA'
const SET_FORM_ERROR= 'SET_FORM_ERROR'
//initial state
let initialState = {
    userId : null,
    email: null,
    login:null,
    isAuth:false,
    formError:null
};
// reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            return  {
                ...state,
                ...action.data,
            };

        }
        case SET_FORM_ERROR:{
            return  {
                ...state,
                formError:action.error,
            };

        }


        default:
            return state;
    }


}

// action creators
export const setAuthUserData = (userId,email,login,isAuth) => ({type:SET_USER_DATA, data:{userId,email,login,isAuth}})
export const setFormError = (error) => ({type:SET_FORM_ERROR, error})

//thunk creators

export const checkAuth = () => {
    return async  (dispatch) => {
        let data = await AuthAPI.getAuthStatus()
        if(data.resultCode===0){
            let {id,login,email} = data.data
            dispatch(setAuthUserData(id,email,login,true))
        }

    }
}

export const login = (email,password,rememberMe) => {
    return async (dispatch) => {
        let data = await AuthAPI.login(email,password,rememberMe)
        if(data.resultCode === 0){
            dispatch(checkAuth())
            dispatch(setFormError(null))
        }
        else {
            let message = data.messages[0] || 'Some error'
            dispatch(setFormError(message))
        }

    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await AuthAPI.logout()
        if(data.resultCode === 0){
            dispatch(setAuthUserData(null,null,null,false))
        }

    }
}

export default authReducer;
