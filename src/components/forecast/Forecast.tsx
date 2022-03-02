import React, { FC } from 'react';
import { ForecastData } from '../../redux/types';
import "./forecast.css"
interface ForecastProps {
  data: ForecastData[];
}

const Forecast: FC<ForecastProps> = ({ data }) => {
//   const fahrenheit = data.current.temp_f;
//   const celsius = data.current.temp_c;

console.log(data);
var utcSeconds = 1646265600;
var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
d.setUTCSeconds(utcSeconds);
console.log(d);

  return(
      <div className="forecast_container">
        {
          data.map( (item,index) => {
            console.log(index);
            if(index != 0){
              return <div key={index} className='day'>
              <div className="day_date">{item.date}</div>    
              <div className="date_temp">{item.day.avgtemp_c}</div>
              <div className="date_condition">{item.day.condition.text}</div>
              <img className="date_icon" src={item.day.condition.icon}/>
              </div>
             }
          })
        }
    </div>

  );
}

export default Forecast;