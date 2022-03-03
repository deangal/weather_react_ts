import React, {FC,useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Search from './components/search/Search';
import Weather from './components/weather/Weather';
import Alert from './components/alert/Alert';
import Forecast from './components/forecast/Forecast'
import { SET_ALERT } from './redux/slices/AlertSlice';
import { SET_ERROR, GET_WEATHER } from './redux/slices/WeatherSlice';
import axios from 'axios';
const App: FC = () => {


  useEffect(() => {
    async function fetchOnMount() {
      
        if(WeatherData.length == 0) {
          const res:any = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=haifa&days=5&aqi=no&alerts=no`)
          .then(function (response) {
            dispatch(GET_WEATHER(response.data));

          })
          .catch(function (error) {
            console.log(error.response.status);
          });
        }
    
    }
    fetchOnMount()
  }, [])
  
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
      {(WeatherData == null || WeatherData.length == 0)? <h2 className="center"></h2> : <Forecast data={WeatherData.forecast.forecastday}/>}
      {AlertData && <Alert message={AlertData} onClose={() => dispatch(SET_ALERT(''))} />}
      {ErrorData && <Alert message={ErrorData} onClose={() => dispatch(SET_ERROR(''))} />}
      
    </div>
  );
}

export default App;
