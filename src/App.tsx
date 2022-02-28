import React, {FC,useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { GET_WEATHER } from "./redux/slices/WeatherSlice";
import axios from 'axios'
const App: FC = () => {

   //redux
   let WeatherData = useSelector((state: any) => {
    return state.users;
  });
  const dispatch = useDispatch();


  useEffect(() => {
    async function fetchUsers() {
      const res:any = axios.get("http://api.weatherapi.com/v1/current.json?key=fec5714f0b314f7ab89160639222802&q=London&aqi=no")
      .then(function (response) {
        dispatch(GET_WEATHER(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });

      

    }
    fetchUsers();
  }, [])



  return (
    <div className="App">
     APP
    </div>
  );
}

export default App;
