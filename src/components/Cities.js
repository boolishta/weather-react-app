import React from 'react'
import { Nav, NavItem, NavLink } from 'react-bootstrap'

const Cities = ({ PLACES, activePlace, removeCity, updateActivePlace }) => {
  return (
    <Nav  variant="pills"
          className="flex-column"
          activeKey={activePlace}
          onSelect={index => updateActivePlace(index)}>
      {PLACES.map((place, index) => (
        <NavItem key={index}>
          <NavLink eventKey={index}
            onDoubleClick={() => removeCity(place.name)}>{place.name}</NavLink>
        </NavItem>)
        )
      }
    </Nav>
  )  
}

export default Cities