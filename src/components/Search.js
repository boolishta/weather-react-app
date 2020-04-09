import React from 'react'
import { TextField, Button } from '@material-ui/core'

const Search = ({ handleSubmit, value, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField  value={value} placeholder="Search..." onChange={handleChange} required fullWidth margin="normal" />
      <Button variant="contained" type="submit" color="primary"> Добавить</Button>
    </form>
  )  
}

export default Search