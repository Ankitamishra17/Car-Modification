import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;