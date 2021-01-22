import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import usersReducer from './reducer/users';
import albumsReducer from './reducer/albums';
import photosReducer from './reducer/photos';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
