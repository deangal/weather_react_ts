import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import  { WeatherState,GetWeatherAction } from '../types'


// Define the initial state using that type
const initialState: WeatherState = {
    data: null,
    loading: false,
    error: ""
}


export const counterSlice = createSlice({
  name: 'weather',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    GET_WEATHER: (state,action) => {
      state.data = action.payload
      state.loading = false
      state.error = ''
    },
    SET_LOADING: (state) => {
      state.loading = true
    },
    SET_ERROR: (state,action) => {
      state.error = action.payload
    }
  },
})

export const {GET_WEATHER,SET_LOADING,SET_ERROR} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWeather = (state: RootState) => state

export default counterSlice.reducer