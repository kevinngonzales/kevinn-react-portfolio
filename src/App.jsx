import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";

function App() {
  function Navbar() {
    return (
<>



      <nav className="navbar">
<div className="navbar-name">KEVINN GONZALES</div>
        <ul className="navbar-ul">

          <li>
            <Link className="navbar-li" to="/Projects"> PROJECTS </Link>
          </li>
          <li>
            <Link className="navbar-li" to="/"> ABOUT </Link>
          </li>
          <li>
            <Link className="navbar-li" to="/contact"> CONTACT </Link>
          </li>
        </ul>
      </nav>



      </>
    );
  }

  return (
    <>
      <Router>
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
      </Router>
    </>
  );
}

export default App;


// inspo
// https://www.hellorobo.co/