import profileReducer, {addPost, deletePost} from "../redux/profileReducer";

it(`add post and posts length increment`,()=>{
    // test data
    let state = {
        posts : [
            {id:1, message:'I like old films. They are atmospheres.',likesCount:10},
            {id:2, message:'Baron Corbin is my brother. He is cool dude.',likesCount:12},
            {id:3, message:'I am very happy girl.',likesCount:32},
            {id:4, message:"Hi, i'm Alice. It is my first post in this network.",likesCount:2}]
    }
    let action = addPost('test text')
    // action
    let newState = profileReducer(state,action)
    // expectation
    expect(newState.posts.length).toBe(5)

})

it(`delete post and posts length decrement`,()=>{
    // test data
    let state = {
        posts : [
            {id:1, message:'I like old films. They are atmospheres.',likesCount:10},
            {id:2, message:'Baron Corbin is my brother. He is cool dude.',likesCount:12},
            {id:3, message:'I am very happy girl.',likesCount:32},
            {id:4, message:"Hi, i'm Alice. It is my first post in this network.",likesCount:2}]
    }
    let action = deletePost(1)
    // action
    let newState = profileReducer(state,action)
    // expectation
    expect(newState.posts.length).toBe(3)

})