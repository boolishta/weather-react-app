import { Container, Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React, { Component } from 'react';
import './App.css';
import Cities from './components/Cities';
import Header from './components/Header';
import Search from './components/Search';
import WeatherDisplayContainer from './components/WeatherDisplayContainer';
import './css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      PLACES: [
        { name: "Санкт-Петербург" },
        { name: "Улан-Удэ" },
        { name: "Москва" }
      ],
      activePlace: 0,
      value: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeCity = this.removeCity.bind(this);
    this.updateActivePlace = this.updateActivePlace.bind(this);
  }
  updateActivePlace(index) {
    this.setState({ activePlace: index })
  }
  removeCity(name) {
    const { PLACES } = this.state;
    let newPlaces = PLACES.filter(p => p.name !== name)
    this.setState({ PLACES: newPlaces, activePlace: 0 })
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit(event) {
    const { value, PLACES } = this.state;
    this.setState({
      PLACES: [
        ...PLACES,
        { name: value }
      ],
      value: "",
      activePlace: PLACES.length
    })
    event.preventDefault();
  }

  render() {
    const { activePlace, PLACES, value } = this.state;
    if (!PLACES.length) return (
      <Container maxWidth='md' style={{marginTop: 20}}>
        <Grid container spacing={3}>
          <Grid item xs={12}><Header /></Grid>
          <Grid item xs={5}>
            <Search value={value} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          </Grid>
          <Grid item xs={7}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Выберите город
            </Alert>
          </Grid>  
        </Grid>
      </Container>)
    return (
      <Container maxWidth='md' style={{marginTop: 20}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={5}>
            <Search value={value} handleSubmit={this.handleSubmit}
              handleChange={this.handleChange} />
              <br/>
            <Cities PLACES={PLACES} activePlace={activePlace}
                    removeCity={this.removeCity}
                    updateActivePlace={this.updateActivePlace} 
                    />
          </Grid>
          <Grid item xs={7}>
              <WeatherDisplayContainer key={activePlace} name={PLACES[activePlace].name} />
          </Grid>
          
        </Grid>
      </Container>
    );
  }
}

export default App;
