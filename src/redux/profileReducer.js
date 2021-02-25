const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts : [
        {id:1, message:'I like old films. They are atmospheres.',likesCount:10},
        {id:2, message:'Baron Corbin is my brother. He is cool dude.',likesCount:12},
        {id:3, message:'I am very happy girl.',likesCount:32},
        {id:4, message:"Hi, i'm Alice. It is my first post in this network.",likesCount:2}],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id:state.posts.length+1,
                message:state.newPostText,
                likesCount:2
            };
            return  {
                ...state,
                posts:[...state.posts,newPost],
                newPostText:''
            };

        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText:action.newText
            };

        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile:action.profile
            }
        }

        default:
            return state;
    }


}


export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text)=>{

    return{
        type: UPDATE_NEW_POST_TEXT,
        newText:text
    }
}

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE,profile});

export default profileReducer;