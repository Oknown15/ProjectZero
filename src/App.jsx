import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Solution from './Components/Solution'
import Reviews from './Components/Reviews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Solution 
title= "web design" 
value="dorem fipsum fua fssu tet et udum dipsumtua dua kiat dest idan"
secondTopic = "development"
secondValue ="lorem ipsum tua Iesu tet et unum ipsumtua dua fiat test wan"
thirdTopic = "app development"
thirdValue = "dorem fipsum fua fssu tet et udum dipsumtua dua kiat dest idan"/>
<Reviews/>
    </>
  )
}

export default App
