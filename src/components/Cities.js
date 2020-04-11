import { Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';

const Cities = ({ PLACES, removeCity, setActivePlace }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setActivePlace(newValue);
  };
  return (<>
    <Tabs   orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            indicatorColor="primary"
            textColor="primary"
            style={{ height: 300}}
            >
            { PLACES.map((place, index) => ( <Tab key={index} label={place.name} 
                                                  onDoubleClick={() => removeCity(place.name)}
                                                  style={{outline: 'none'}}/>)) }  
    </Tabs>
    </>
  )  
}

export default Cities