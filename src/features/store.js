import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import userReducer from './userSlice';




export const store = configureStore({
  reducer:{
    [authApi.reducerPath] : authApi.reducer,
    user: userReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat([
    authApi.middleware

  ])
})