import { useState } from 'react'
import './App.css'
import Header from './components/layouts/Header'
import { Home } from './pages/Home'
import TopBar from './components/layouts/TopBar'
import Footer from './components/layouts/Footer'
import About from './pages/About'

function App() {
  return (
    <>
    <TopBar />
    <Header />
    <Home />
    <About />
    <Footer />
    </>
  );
}

export default App;