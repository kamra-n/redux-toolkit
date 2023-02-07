import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Features/UserSlice'

export const store = configureStore({
    reducer: { userSlice },
})