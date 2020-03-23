import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Search = ({handleSubmit, value, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group  controlId="formGridCity" >
          <Form.Control value={value} placeholder="Search..." onChange={handleChange} />
        </Form.Group>
      </Form.Row>
      <Button variant="outline-success" type="submit"> Добавить</Button>
    </Form>
  )  
}

export default Search