import React from 'react'
import logo from "./components/assets/logo.png"
import Button from "@material-ui/core/Button"

const App = () => {
  return (
    <>
    <Button 
      variant='contained'
      color='secondary'
    >
      HELLO WORLD
    </Button>
    <img src={logo} alt='Logo' />
    </>
  )
}

export default App