import React, { FC } from 'react';
import { WeatherData } from '../../redux/types';
import { useSelector } from "react-redux";

import "./weather.css"
interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data },toggle:boolean) => {

  // toggle f/c
  let ToggleData = useSelector((state: any) => {
    return state.weather.toggle;
  });

  const fahrenheit = data.current.temp_f;
  const celsius = data.current.temp_c;
  let temp = ToggleData ? fahrenheit : celsius ;
  let sign = ToggleData ?  <sup>&#8457;</sup> : <sup>&#8451;</sup> 
 
  return(
      <div className="weather_container">
        <h1 className="weather_title">{data.location.name} - {data.location.country}</h1>
          <div className="header_container">
              <h2 className="weather_condition">{data.current.condition.text}</h2>
              <p className="weather_icon"><img src={data.current.condition.icon} alt=""/></p>
          </div>

            <div className="level">
          <div className="temp_container">
            <div>
              <h2 className="temp_heading">Tempature</h2>
              <div className="temp_data">
                <p className="temp">{temp}{sign}</p>
              </div>
            </div>
          </div>
          <div className="humidity_container">
            <div>
              <h2 className="humidity_heading">Humidity</h2>
              <p className="humidity_data">{data.current.humidity}</p>
            </div>
          </div>
          <div className="pressure_container">
            <div>
              <h2 className="pressure_heading">Pressure</h2>
              <p className="pressure_data">{data.current.pressure_mb}</p>
            </div>
          </div>
          <div className="wind_container">
            <div>
              <h2 className="wind_heading">Wind</h2>
              <p className="wind_data">{data.current.wind_kph} kph</p>
            </div>
          </div>
      </div>
    </div>

  );
}

export default Weather;