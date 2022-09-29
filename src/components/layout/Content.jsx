import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'

const Content = props => (
  <main className='Content'>
    <Routes>
      <Route path="/" element={<About />}/>
      <Route path="/about" element={<Home />}/>
      <Route path="/param" element={<Param />}/>
    </Routes>
  </main>
)

export default Content