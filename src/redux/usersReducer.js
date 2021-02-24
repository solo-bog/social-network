const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users : [
        /*{id:1,photo: "https://hornews.com/upload/images/akter.jpeg",followed:true, fullName:"Andrey", status: "I'm a boss", location:{city:"Kiev",country:"Ukraine"}},
        {id:2,photo:"https://ona-znaet.ru/_pu/19/72349760.jpg", followed:false, fullName:"Oleg", status: "I'm a tomato", location:{city:"Berlin",country:"Germany"}},
        {id:3,photo:"https://www.infoniac.ru/upload/medialibrary/2af/2af1c4e727bb59f7b8ac632cd343d594.jpg", followed:false, fullName:"Anton", status: "I'm a rabbit", location:{city:"Rome",country:"Italy"}},
        {id:4,photo:"https://d2p8jjwwnx090z.cloudfront.net/566/203/371/-69996995-1t7nemh-jdhb82ra01be6bk/original/COhrPJYTohM.jpg", followed:true, fullName:"Sofia", status: "I'm a cat", location:{city:"Lutsk",country:"Ukraine"}}
        */],
    pageSize:50,
    totalUsersCount:0,
    currentPage:1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return  {
                ...state,
                users:state.users.map(u => {
                    if(u.id===action.userID){
                        u.followed=true;
                    }
                    return u;
                })
            };

        }
        case UNFOLLOW:{
            return {
                ...state,
                users:state.users.map(u => {
                    if(u.id===action.userID){
                        u.followed=false;
                    }
                    return u;
                })
            };

        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }

        default:
            return state;
    }


}


export const followAC = (userID) => {

    return {
        type: FOLLOW,
        userID:userID
    }
}

export const unfollowAC = (userID)=>{

    return{
        type: UNFOLLOW,
        userID: userID
    }
}

export const setUsersAC = (users) =>{
    return{
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPageAC = (currentPage) =>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export default usersReducer;