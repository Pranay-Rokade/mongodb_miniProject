import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignUp />} ></Route>
      <Route path='/login' element={<Login />} ></Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
