import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function Navbar() {


    const { pathname } = useLocation();

    const navLinkColor = {
        color: '#2b2b2b',

    };



    return (
<>
      <nav className="navbar">
<img src="/name-title.png" className="navbar-name" />
        <ul className="navbar-ul">

          <li>
            <Link 
            className="navbar-li" 
            to="/projects"  
            style={pathname === '/projects' ? navLinkColor : null}>
            Projects
            </Link>
          </li>
          <li>
            <Link 
            className="navbar-li" 
            to="/"
            style={pathname === '/' ? navLinkColor : null}>  
            About
            </Link>
          </li>
          <li>
            <Link 
            className="navbar-li" 
            to="/contact"
            style={pathname === '/contact' ? navLinkColor : null}>  
           Contact
            </Link>
          </li>
        </ul>
      </nav>
      </>
    );
  }

export default Navbar