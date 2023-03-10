import { createSlice } from '@reduxjs/toolkit'

export const mentorSlice = createSlice({
    name: 'mantor',
    initialState: {
        id: 1,
        isAnimationEnter : false,
        isLeftRotate : null,
        isRightRotate : null,
    },
    reducers : {
       rotateLeft : state => {
        state.id = state.id > 1 ? state.id - 1 : 5
        state.isAnimationEnter = !state.isAnimationEnter
        state.isLeftRotate = true
        state.isRightRotate = false
       },
       rotateRight : state => {
        state.id = state.id < 5 ? state.id + 1 : 1
        state.isAnimationEnter = !state.isAnimationEnter
        state.isLeftRotate = false
        state.isRightRotate = true
       }
    }
});

export const { rotateLeft, rotateRight } = mentorSlice.actions;
export default mentorSlice.reducer;