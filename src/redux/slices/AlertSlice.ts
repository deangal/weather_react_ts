import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import  { AlertState } from '../types'


// Define the initial state using that type
const initialState: AlertState = {
    message: ""
}


export const alertSlice = createSlice({
  name: 'alert',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    SET_ALERT: (state,action) => {
      state.message = action.payload
    },
    
  },
})

export const { SET_ALERT } = alertSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAlert = (state: RootState) => state

export default alertSlice.reducer