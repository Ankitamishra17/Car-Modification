import { Routes, Route } from 'react-router-dom'
import './App.css'
import TopBar from './components/layouts/TopBar'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import { Home } from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;