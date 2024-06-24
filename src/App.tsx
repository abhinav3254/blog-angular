import React from 'react'
import Home from './components/Home'
import Skills from './components/Skills'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Nav />
      <div className='pt-[80px]'>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  )
}

export default App