const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id:1, message:'I like old films. They are atmospheres.',likesCount:10},
        {id:2, message:'Baron Corbin is my brother. He is cool dude.',likesCount:12},
        {id:3, message:'I am very happy girl.',likesCount:32},
        {id:4, message:"Hi, i'm Alice. It is my first post in this network.",likesCount:2}],
    newPostText: ''
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

export default profileReducer;