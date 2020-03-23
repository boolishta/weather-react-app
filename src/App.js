import React, { Component } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './css/bootstrap.min.css';
import './App.css';
import Cities from './components/Cities';
import Header from './components/Header';
import Search from './components/Search';
import WeatherDisplayContainer from './components/WeatherDisplayContainer';


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
    let newPlaces = PLACES.filter( p => p.name !== name)
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
    if ( !PLACES.length ) return (
      <Container>
        <Header />
        <Row>
          <Col md={4} sd={4}>
            <Search value={value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          </Col>
          <Col md={8} sd={8}><h1>Нет города для показа погоды</h1></Col>
        </Row>
      </Container>)
    return (
      <Container>
        <Header />
        <Row>
          <Col md={4} sd={4}>
            <Search value={value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>           
            <Cities PLACES={PLACES} activePlace={activePlace} removeCity={this.removeCity} updateActivePlace={this.updateActivePlace}/>
          </Col>
          <Col md={8} sd={8}>
            <WeatherDisplayContainer key={activePlace} name={PLACES[activePlace].name} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
