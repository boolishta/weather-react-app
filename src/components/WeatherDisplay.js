import React from 'react';

const WeatherDisplay = ({ weather, weatherData, iconUrl }) => {
  return (
    <div>
      <h1>
        {weather.main} in {weatherData.name}
        <img src={iconUrl} alt={weatherData.description} />
      </h1>
      <p>Температура: {weatherData.main.temp}°</p>
      <p>Ощущается как: {weatherData.main.feels_like}°</p>
      <p>Максимальная температура: {weatherData.main.temp_max}°</p>
      <p>Минимальная температура: {weatherData.main.temp_min}°</p>
      <p>Влажность: {weatherData.main.humidity} %</p>
      <p>Скорость ветра: {weatherData.wind.speed} м/сек</p>
    </div>
  );
}

export default WeatherDisplay