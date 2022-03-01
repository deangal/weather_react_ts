import React, { FC } from 'react';
import { WeatherData } from '../redux/types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = data.current.temp_f;
  const celsius = data.current.temp_c;

  return(
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered" style={{marginBottom: 50}}>{data.location.name} - {data.location.country}</h1>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{data.current.condition.text}</p>
              <p className="title"><img src={data.current.condition.icon} alt=""/></p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">temp</p>
              <div className="title">
                {/* <p className="mb-2">{celsius}K</p> */}
                <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                <p>{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">humidity</p>
              <p className="title">{data.current.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">pressure</p>
              <p className="title">{data.current.pressure_mb}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">wind</p>
              <p className="title">{data.current.wind_kph} kph</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;