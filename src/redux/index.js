import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import users from './reducer/users';
import albums from './reducer/albums';
import photos from './reducer/photos';
import theme from './reducer/theme';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  users,
  albums,
  photos,
  theme,
});

const preloadedState = JSON.parse(localStorage.getItem('theme'));

const store = createStore(
  rootReducer,
  preloadedState ? preloadedState : undefined,
  applyMiddleware(thunk, logger),
);

store.subscribe(() => {
  localStorage.setItem(
    'theme',
    JSON.stringify({
      theme: store.getState().theme,
    }),
  );
});

export default store;
