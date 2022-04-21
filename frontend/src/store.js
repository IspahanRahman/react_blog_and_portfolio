import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './features/postsSlice'
import userSlice from './features/userSlice'
import appApi from './services/appApi'

export const store = configureStore({
  reducer: {
      user:userSlice,
      post:postsSlice,
      [appApi.reducerPath]:appApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware)
})

export default store