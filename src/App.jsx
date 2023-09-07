import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/signup'
import Login from './Pages/Login'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />}  ></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    </>
  )
}

export default App
