import React from 'react'
import Drawer from './Pages/drawer'
import {Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Drawer />} />


      </Routes>

    </div>
  )
}

export default App
