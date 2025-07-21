import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Services from './pages/services'
import Results from './pages/result.jsx'
import Nopage from './pages/nopage.jsx'

function App() {
  

  return (
    <>


    <BrowserRouter>
    <Routes>
<Route index element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/results' element={<Results/>}/>
<Route path='*' element={<Nopage/>}/>
    </Routes>
    
    
    </BrowserRouter>

    </>
  )
}

export default App
