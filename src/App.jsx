import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
