const ADD_MESSAGE = 'ADD-MESSAGE';
// initial state
const initialState = {
  dialogs: [
    { id: 1, name: 'Dima', img: 'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859' },
    { id: 2, name: 'Andrey', img: 'https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg' },
    { id: 3, name: 'Sveta', img: 'https://i.pinimg.com/originals/81/a9/4a/81a94a7d0454d9ec58f1ea8db69d9b2e.jpg' },
    { id: 4, name: 'Tima', img: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg' },
    { id: 5, name: 'Maks', img: 'https://theportraitmasters.com/wp-content/uploads/2019/02/DayronVera_SelfPortrait-1-300x300.jpg' },
  ],
  messages: [
    { id: 1, message: 'Hi', isMy: false },
    { id: 2, message: 'How is your education', isMy: false },
    { id: 3, message: 'Hi. All is cool!', isMy: true },
    { id: 4, message: 'Goodbye', isMy: false },
  ],
};
// reducer
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: state.messages.length + 1,
          message: action.newMessageText,
          isMy: true,
        }],
      };

    default:
      return state;
  }
};

// action creators
export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export default dialogsReducer;
