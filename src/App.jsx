import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {

  return (
    <>
        <Navbar />



        <Routes>
          <Route 
          path="/Projects" 
          element={<Projects />} 
          />
          
          <Route 
          path="/" 
          element={<About />} 
          />

          <Route 
          path="/Contact" 
          element={<Contact 
          />} />
        </Routes>


    </>
  );
}

export default App;


// inspo
// https://www.hellorobo.co/