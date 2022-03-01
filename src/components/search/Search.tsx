import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import "./search.css"

import { fetchWeather, SET_LOADING } from '../../redux/slices/WeatherSlice';
import { SET_ALERT } from '../../redux/slices/AlertSlice'
interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(city.trim() === '') {
      return dispatch(SET_ALERT('City is required!'));
    }

    dispatch(SET_LOADING());
    dispatch(fetchWeather(city));
    setCity('');
  }

  return(
    <div className="navbar">
          <h1 className="nav_title">{title}</h1>
          <form className="nav_form" onSubmit={submitHandler}>
            <input 
              type="text"
              className="nav_input"
              placeholder="Enter city name"
              style={{maxWidth: 300}}
              value={city}
              onChange={changeHandler}
            />
            <button className="nav_submit" style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
          </form>
    </div>
  );  
}

export default Search;