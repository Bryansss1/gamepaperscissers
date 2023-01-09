import { createSlice } from '@reduxjs/toolkit';

export const countSliceoneplayer = createSlice({
    name: 'Countoneplayer',
    initialState: 0,
    reducers: {
            increment:state=>{
                return state +1
            },
            decrement:state=>{
                return state -1
            }
    }
})

export const { increment,decrement } = countSliceoneplayer.actions;

export default countSliceoneplayer.reducer;
