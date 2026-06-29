import { useState } from 'react'
import './App.css'
import Header from './components/layouts/Header'
import { Home } from './pages/Home'
import TopBar from './components/layouts/TopBar'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <>
    <TopBar />
    <Header />
    <Home />
    <Footer />
    </>
  );
}

export default App;