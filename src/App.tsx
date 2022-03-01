import React, {FC,useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Search from './components/Search';
import Weather from './components/Weather';
import Alert from './components/Alert';
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

 console.log(WeatherData.length);
 

  return (
    <div className="App">
      <Search title="Enter city name and press search button" />
      
      {(WeatherData == null || WeatherData.length == 0)? <h2 className="is-size-3 py-2">Loading...</h2> : <Weather data={WeatherData}/>}
      {AlertData && <Alert message={AlertData} onClose={() => dispatch(SET_ALERT(''))} />}
      {ErrorData && <Alert message={ErrorData} onClose={() => dispatch(SET_ERROR(''))} />}
      
    </div>
  );
}

export default App;
