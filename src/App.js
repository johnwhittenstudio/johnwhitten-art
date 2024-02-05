import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home'
import LandingPage from './components/pages/LandingPage/LandingPage'
import Drawings from './components/pages/Drawings/Drawings'
import Videos from './components/pages/Videos/Videos'
import Photos from './components/pages/Photos/Photos'
import About from './components/pages/About/About'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/drawings' element={<Drawings/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/photos' element={<Photos/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
