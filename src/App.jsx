import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Bio from "./Pages/Biography";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./Style/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Biography" element={<Bio />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
