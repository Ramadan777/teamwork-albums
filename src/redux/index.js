import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger/src'
import usersReducer from './users'
import albumsReducer from './albums'
import photosReducer from './photos'

const logger = createLogger({
  diff: true,
  collapsed: true
});

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;