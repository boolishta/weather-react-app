import { Tab, Tabs } from '@material-ui/core';
import React from 'react';

const Cities = ({ PLACES, activePlace, removeCity, updateActivePlace }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    updateActivePlace(newValue);
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