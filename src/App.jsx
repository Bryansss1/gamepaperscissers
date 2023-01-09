import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layoutcountertwoplayer from './components/Layoutcountertwoplayer'
import Home from './pages/Home'
import Player1 from './pages/Player1'
import Player2 from './pages/Player2'
import './styles/App.scss'

function App() {
  

  return ( 
  <div className="App">
<HashRouter> 
 
<Routes>

<Route path='/twoplayer' element={<Player2/>}/>

<Route path='/oneplayer' element={<Player1/>}/>
<Route path='/' element={<Home/>}/>
</Routes>
</HashRouter>
    </div>
  )
}

export default App
