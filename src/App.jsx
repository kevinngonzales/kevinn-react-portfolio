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
          path="/kevinn-react-portfolio/Projects" 
          element={<Projects />} 
          />
          
          <Route 
          path="/kevinn-react-portfolio" 
          element={<About />} 
          />

          <Route 
          path="/kevinn-react-portfolio/Contact" 
          element={<Contact 
          />} />
        </Routes>


    </>
  );
}

export default App;


// inspo
// https://www.hellorobo.co/