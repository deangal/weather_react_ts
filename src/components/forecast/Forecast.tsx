import React, { FC } from 'react';
import { ForecastData } from '../../redux/types';
import { useSelector } from "react-redux";

import "./forecast.css"
interface ForecastProps {
  data: ForecastData[];
}

const Forecast: FC<ForecastProps> = ({ data }) => {

    // toggle f/c
    let ToggleData = useSelector((state: any) => {
      return state.weather.toggle;
    });
  
    
  
    


  return(
      <div className="forecast_container">
        {
          data.map( (item,index) => {

          const fahrenheit = item.day.avgtemp_f;
          const celsius = item.day.avgtemp_c;
          let temp = ToggleData ? fahrenheit : celsius ;
          let sign = ToggleData ?  <sup>&#8457;</sup> : <sup>&#8451;</sup> 
           
          let dt = new Date(item.date).getDay();
          let dayString
          if(dt == 0){
            dayString = "Sunday"
          }
          if(dt == 1){
            dayString = "Monday"
          }
          if(dt == 2){
            dayString = "Tuesday"
          }
          if(dt == 3){
            dayString = "Wednesday"
          }
          if(dt == 4){
            dayString = "Thursday"
          }
          if(dt == 5){
            dayString = "Friday"
          }
          if(dt == 6){
            dayString = "Saturday"
          }    


          if(index != 0){
              return <div key={index} className='day'>
              <h1 className="day_date">{dayString}</h1>    
              <div className="date_temp">{temp}{sign}</div>
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