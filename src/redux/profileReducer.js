import {ProfileAPI} from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'

let initialState = {
    posts : [
        {id:1, message:'I like old films. They are atmospheres.',likesCount:10},
        {id:2, message:'Baron Corbin is my brother. He is cool dude.',likesCount:12},
        {id:3, message:'I am very happy girl.',likesCount:32},
        {id:4, message:"Hi, i'm Alice. It is my first post in this network.",likesCount:2}],
    profile: null,
    status:""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id:state.posts.length+1,
                message:action.postText,
                likesCount:2
            };
            return  {
                ...state,
                posts:[...state.posts,newPost],
            };

        }

        case SET_USER_PROFILE:{
            return {
                ...state,
                profile:action.profile
            }
        }
        case UPDATE_USER_STATUS:{
            return {
                ...state,
                status:action.status
            }
        }

        default:
            return state;
    }


}


export const addPost = (text) => {

    return {
        type: ADD_POST,
        postText:text
    }
}



export const updateStatus = (status)=>{

    return{
        type: UPDATE_USER_STATUS,
        status
    }
}

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile});

export const getProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.getProfileInfo(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(data => {
            dispatch(updateStatus(data))
        })
    }
}

export const updateProfileStatus = (text) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(text).then(data =>{
            if(data.resultCode === 0){
                dispatch(updateStatus(text))
            }
            else {
                console.log("error:"+data.messages)
            }
        })
    }
}

export default profileReducer;