import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import usersReducer from './users';
import albumsReducer from './albums';
import photosReducer from './photos';
import themeReducer from './theme';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
  show: themeReducer,
});

const preloadedState = JSON.parse(localStorage.getItem('theme'));

const store = createStore(
  rootReducer,
  preloadedState ? preloadedState : undefined,
  applyMiddleware(thunk, logger),
);

store.subscribe(() => {
  localStorage.setItem('theme', JSON.stringify(store.getState()));
});

export default store;
