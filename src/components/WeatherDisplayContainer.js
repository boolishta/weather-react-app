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
  // componentDidMount() {
  //   const name = this.props.name;
  //   const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
  //     name + "&units=metric&appid=3f69e94b2846c3e406b50a4100f3a461";
  //   Axios.get(URL)
  //     .then(res => this.setState({ weatherData: res.data }))
  //     .catch(error => this.setState({ error }))
  // }
  render() {
    const { weatherData, error } = this.state;
    if (!weatherData && error) {
      return (
        <Alert variant="danger" >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error.response.data.cod} {error.response.data.message}</p>
        </Alert>
      );
    } 
    // else if (!weatherData) {
    //   return <Spinner animation="grow" />
    // }

    return <WeatherDisplay  weatherData={weatherData} 
                            name={this.props.name}/>
  }
}

export default WeatherDisplayContainer