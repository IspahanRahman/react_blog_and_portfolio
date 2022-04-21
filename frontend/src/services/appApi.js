// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (user) => ({
          url:'/user',
          method:'POST',
          body:user,
      }),
    }),
    loginUser:builder.mutation({
        query:(user)=>({
            url:'/user/login',
            method:"POST",
            body:user
        })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useSignupUserMutation,useLoginUserMutation } = appApi
export default appApi;