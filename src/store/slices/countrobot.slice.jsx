import { createSlice } from '@reduxjs/toolkit';

export const countRobotSlice = createSlice({
    name: 'countRobotSlice',
    initialState: 0,
    reducers: {
        incrementrobot:state=>{
            return state +1
        },
        decrementrobot:state=>{
            return state -1
        }
    }
})

export const { incrementrobot,decrementrobot } = countRobotSlice.actions;

export default countRobotSlice.reducer;
