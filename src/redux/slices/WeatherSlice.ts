import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import  { WeatherState,GetWeatherAction } from '../types'
import axios from 'axios'
import { useDispatch } from 'react-redux'

// Define the initial state using that type
const initialState: WeatherState = {
    data: [],
    loading: false,
    error: "",
    toggle:false
}

let fetchData:any = []
let errorHandle:any = ''

export const fetchWeather = createAsyncThunk(
  'weather/fetch',
  async (city: string) => {
    errorHandle = ""
    
    const res:any = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=5&aqi=no&alerts=no`)
    .then(function (response) {
      fetchData = response.data;
    })
    .catch(function (error) {
      if(error.response.status == 400){
        errorHandle = "City Not Found";

      }
    });

  }
)

export const weatherSlice = createSlice({
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
    },
    TOGGLE: (state) => {
      state.toggle = !state.toggle
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchWeather.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(
      fetchWeather.fulfilled, (state, action:any) => {
          if(errorHandle == ''){
            state.data = fetchData;
            state.loading = false;
            state.error = errorHandle
          } else {
            state.error = errorHandle
          }
         

    });
    builder.addCase(
      fetchWeather.rejected,(state, action:any) => {
          state.error = errorHandle;
          
    });
 }
})

export const {GET_WEATHER,SET_LOADING,SET_ERROR,TOGGLE} = weatherSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWeather = (state: RootState) => state

export default weatherSlice.reducer