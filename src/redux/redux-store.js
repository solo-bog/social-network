import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});
const enhancers = compose(
  applyMiddleware(thunk),
  // eslint-disable-next-line no-underscore-dangle
  window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

const store = createStore(reducers, enhancers);
window.store = store;

export default store;
