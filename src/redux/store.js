import { configureStore } from '@reduxjs/toolkit'
import mentorReducer from './mentorSlice'

export default configureStore({
    reducer: {
        mentor: mentorReducer
    }
})