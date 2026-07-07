import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import SidePanel from "./components/common/SidePanel";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";

import ServicePage from "./pages/services/ServicePage";
import BlogDetailPage from "./components/common/blog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
      <Footer />

      {/* Renders once, stays fixed on screen across every route */}
      <SidePanel />
    </>
  );
}

export default App;