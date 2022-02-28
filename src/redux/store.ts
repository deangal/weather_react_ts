import { configureStore } from '@reduxjs/toolkit'
import { combineReducers,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import WeatherSlice from './slices/WeatherSlice'
import AlertSlice from './slices/AlertSlice'

// const rootSlice = combineReducers({weather:WeatherSlice,alert:AlertSlice})

export const store = configureStore({
  reducer:{
    weather:WeatherSlice,
    alert:AlertSlice
  }
  // composeWithDevTools(applyMiddleware(thunk))

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch