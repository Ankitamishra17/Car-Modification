import { Routes, Route } from 'react-router-dom'
import './App.css'
import TopBar from './components/layouts/TopBar'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Franchise from './pages/Franchise'
import Services_1_2 from './pages/services/Service_1_2'
import Services_3_4 from './pages/services/Service_3_4'

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/franchise" element={<Franchise />}/>
        <Route path="/services/services_1_2" element={<Services_1_2 />} />
        <Route path="/services/services_3_4" element={<Services_3_4 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;