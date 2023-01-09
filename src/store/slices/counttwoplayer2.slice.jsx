import { createSlice } from '@reduxjs/toolkit';

export const countSlicetwoplayer2 = createSlice({
    name: 'Counttwoplayer2',
    initialState: 0,
    reducers: {
        increment3:state=>{
            return state +1
        },
        decrement3:state=>{
            return state -1
        }
    }
})

export const { increment3,decrement3 } = countSlicetwoplayer2.actions;

export default countSlicetwoplayer2.reducer;
