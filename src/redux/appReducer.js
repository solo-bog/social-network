import { checkAuth } from './authReducer';
// const action types
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
// initial state
const initialState = {
  initialized: false,
};
// reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

// action creators
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// thunk creators
export const initialize = () => (dispatch) => {
  const promise = dispatch(checkAuth());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
