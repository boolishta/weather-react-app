import { Container, Grid, useMediaQuery } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import './App.css';
import Cities from './components/Cities';
import Header from './components/Header';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import './css/bootstrap.min.css';

//TODO: @media material ui

function App() {
  const [city, setCity] = useState({
    PLACES: [
      { name: "Санкт-Петербург" },
      { name: "Улан-Удэ" },
      { name: "Москва" }
    ]
  });
  const [activePlace, setActivePlace] = useState(0);
  const [value, setValue] = useState('');

  const matches = useMediaQuery('(max-width:426px)');
  
  function removeCity(name) {
    setCity({ PLACES: city.PLACES.filter(p => p.name !== name) });
    setValue('')
    setActivePlace(0)
  }
  function handleChange(event) {
    setValue(event.target.value)
  }
  function handleSubmit(event) {
    setCity({ PLACES: [...city.PLACES, { name: value }] })
    setValue('');
    setActivePlace(city.PLACES.length)
    event.preventDefault();
  }
  if (matches) {
    return     <Container maxWidth='md' style={{ marginTop: 10}} >
                  <Grid container>
                    <Grid item xs={12} style={{ marginBottom: 10}}>
                      <Header matches={matches}/>
                    </Grid> 
                    {!city.PLACES.length
                      ? <Grid item xs={12}>
                          <Alert>Нет города</Alert>
                        </Grid>
                      : <Grid item xs={12} >
                          <WeatherDisplay key={activePlace} name={city.PLACES[activePlace].name} matches={matches}/>
                        </Grid>
                    }                    
                    <Grid item xs={12} >
                      <Search value={value} handleSubmit={handleSubmit}
                        handleChange={handleChange} />
                      <br />
                      <Cities PLACES={city.PLACES} activePlace={activePlace}
                              removeCity={removeCity}
                              setActivePlace={setActivePlace}
                              
                      />
                    </Grid>
                    
                    

                  
                  
                  
                  </Grid>
                </Container>
  }
  return (
    <Container maxWidth='md' style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid> 
        <Grid item xs={4}>
          <Search value={value} handleSubmit={handleSubmit}
            handleChange={handleChange} />
          <br />
          <Cities PLACES={city.PLACES} activePlace={activePlace}
                  removeCity={removeCity}
                  setActivePlace={setActivePlace}
          />
        </Grid>
        {!city.PLACES.length
          ? <Grid item xs={7}>
              <Alert>Нет города</Alert>
            </Grid>
          : <Grid item xs={8}>
              <WeatherDisplay key={activePlace} name={city.PLACES[activePlace].name} />
            </Grid>
        }
      </Grid>
    </Container>
  );

}

export default App;
