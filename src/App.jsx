import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Common from './Routes/Common'
import Patient from './Routes/Patient'
import Admin from './Routes/Admin'
import Pharmacy from './Routes/Pharmacy'
import Doctor from './Routes/Doctor'


const App = () => {
  return (
 <BrowserRouter>
 


  <Common />
 <Patient/> 
<Doctor/>
<Admin/>
 
 </BrowserRouter>
  )
}

export default App;