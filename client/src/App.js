import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css"
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='about' element={<About />} />
          </Routes>
          <Routes>
            <Route path='contact' element={<Contact />} />
          </Routes>
          <Routes>
            <Route path='login' element={<Login />} />
          </Routes>
          <Routes>
            <Route path='signup' element={<Signup />} />
          </Routes>
          <Routes>
            <Route element={<Errorpage />} />
          </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App