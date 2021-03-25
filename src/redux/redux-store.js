import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer
});
const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

let store = createStore(reducers,enhancers);
window.store = store;

export default store;