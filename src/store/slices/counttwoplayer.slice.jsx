import { createSlice } from '@reduxjs/toolkit';

export const countSlicetwoplayer = createSlice({
    name: 'Counttwoplayer',
    initialState: 0,
    reducers: {
        increment2:state=>{
            return state +1
        },
        decrement2:state=>{
            return state -1
        }
    }
})

export const { increment2,decrement2 } = countSlicetwoplayer.actions;

export default countSlicetwoplayer.reducer;
