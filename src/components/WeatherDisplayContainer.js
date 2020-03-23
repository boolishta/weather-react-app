import React, { Component } from 'react'
import Axios from 'axios';
import { Alert, Spinner } from 'react-bootstrap';
import WeatherDisplay from './WeatherDisplay';


class WeatherDisplayContainer extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      error: null,
      show: false
    }
  }
  componentDidMount() {
    const name = this.props.name;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      name + "&units=metric&appid=b1b35bba8b434a28a0be2a3e1071ae5b";
    Axios.get(URL)
      .then(res => this.setState({ weatherData: res.data }))
      .catch(error => this.setState({ error }))
  }
  render() {
    const { weatherData, error } = this.state;
    if (!weatherData && error) {
      return (
        <Alert variant="danger" >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error.response.data.cod} {error.response.data.message}</p>
        </Alert>
      );
    } else if (!weatherData) {
      return <Spinner animation="grow" />
    }
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return <WeatherDisplay weather={weather} weatherData={weatherData} iconUrl={iconUrl}/>
  }
}

export default WeatherDisplayContainer