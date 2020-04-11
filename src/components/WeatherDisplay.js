import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import style from './WeatherDisplay.module.css'
import Axios from 'axios';
import { Alert } from '@material-ui/lab';
import { Spinner } from 'react-bootstrap';



function WeatherDisplay ({ name, matches }) {
  const [data, setData] = useState({ hits: [] });
  const [error, setError] = useState(null);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=3f69e94b2846c3e406b50a4100f3a461`;
  
  useEffect( () => {
    let ignore = false;
    async function fetchData() {
        try { 
          const result = await Axios.get(URL);
          if (!ignore ) setData(result.data)
          }
          catch(err) {
            setError(err);
          }
      };
    fetchData();
    return () => { ignore = true; }
  }, [URL])

  if (matches) {
    return <>
    { error &&  <Alert>
                  <p>Oh snap! You got an error!</p>
                  <p>{error.response.data.cod} {error.response.data.message}</p>
                </Alert>}
    { !data.weather 
        ? <Spinner animation="grow"/>
        : <Paper elevation={3} className={style.weatherSmall} >
            <h1>
                {data.weather[0].main} in {data.name}
              <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].description} />
            </h1>
            <p>Температура: {data.main.temp} °</p>
            <p>Ощущается как: {data.main.feels_like} °</p>
            <p>Максимальная температура: {data.main.temp_max} °</p>
            <p>Минимальная температура:  {data.main.temp_min} °</p>
            <p>Влажность:  {data.main.humidity}  %</p>
            <p>Скорость ветра: {data.wind.speed} м/сек</p>
          </Paper>}
      
  </>
  }

  return (<>
        { error &&  <Alert>
                      <p>Oh snap! You got an error!</p>
                      <p>{error.response.data.cod} {error.response.data.message}</p>
                    </Alert>}
        { !data.weather 
            ? <Spinner animation="grow"/>
            : <Paper elevation={3} className={style.weather} >
                <h1>
                    {data.weather[0].main} in {data.name}
                  <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].description} />
                </h1>
                <p>Температура: {data.main.temp} °</p>
                <p>Ощущается как: {data.main.feels_like} °</p>
                <p>Максимальная температура: {data.main.temp_max} °</p>
                <p>Минимальная температура:  {data.main.temp_min} °</p>
                <p>Влажность:  {data.main.humidity}  %</p>
                <p>Скорость ветра: {data.wind.speed} м/сек</p>
              </Paper>}
          
      </>);
}

export default WeatherDisplay