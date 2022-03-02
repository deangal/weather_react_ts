import React, {FC,useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Search from './components/search/Search';
import Weather from './components/weather/Weather';
import Alert from './components/alert/Alert';
import Forecast from './components/forecast/Forecast'
import { SET_ALERT } from './redux/slices/AlertSlice';
import { SET_ERROR } from './redux/slices/WeatherSlice';
const App: FC = () => {

   //redux
   let WeatherData = useSelector((state: any) => {
    return state.weather.data;
  });

  

  let ErrorData = useSelector((state: any) => {
    return state.weather.error;
  });

  let AlertData = useSelector((state: any) => {
    return state.alert.message;
  });
  const dispatch = useDispatch();


  return (
    <div className="App">
      <Search title="Enter city name and press search button" />
      
      {(WeatherData == null || WeatherData.length == 0)? <h2 className="center">Loading...</h2> : <Weather data={WeatherData}/>}
      {(WeatherData == null || WeatherData.length == 0)? <h2 className="center">Loading...</h2> : <Forecast data={WeatherData.forecast.forecastday}/>}
      {AlertData && <Alert message={AlertData} onClose={() => dispatch(SET_ALERT(''))} />}
      {ErrorData && <Alert message={ErrorData} onClose={() => dispatch(SET_ERROR(''))} />}
      
    </div>
  );
}

export default App;
