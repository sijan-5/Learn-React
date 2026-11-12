import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/homepage'

function App() {
  // const [count, setCount] = useState(0)
  //should return only on root element
  return (
    <>
      {/* <MovieCard movie={{ title: "Sijan's Film", release_date: "2026" }} /> */}

      <Home />
    </>
  )
}

export default App
