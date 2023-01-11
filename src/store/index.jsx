import { configureStore } from '@reduxjs/toolkit'
import countSlice from './slices/count.slice'
import counttwoplayerSlice from './slices/counttwoplayer.slice'
import counttwoplayer2Slice from './slices/counttwoplayer2.slice'
import countrobotSlice from './slices/countrobot.slice'
export default configureStore({
    reducer: {
        countSlice,
        counttwoplayerSlice,
        counttwoplayer2Slice,
        countrobotSlice
    }
})
