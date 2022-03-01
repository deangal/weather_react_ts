import React, {FC,useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Search from './components/Search';
import Weather from './components/Weather';
const App: FC = () => {

   //redux
   let WeatherData = useSelector((state: any) => {
    return state.weather.data;
  });
  const dispatch = useDispatch();

 console.log(WeatherData);
 

  return (
    <div className="App">
      <Search title="Enter city name and press search button" />
      
      {(WeatherData == null )? <h2 className="is-size-3 py-2">Loading...</h2> : <Weather data={WeatherData}/>
      }
    </div>
  );
}

export default App;
