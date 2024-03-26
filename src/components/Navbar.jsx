import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

function Navbar() {


    const { pathname } = useLocation();

    const navLinkColor = {
        color: '#5ce1e6',

    };



    return (
<>
      <nav className="navbar">
        <ul className="navbar-ul">

          <li>
            <Link 
            className="navbar-li" 
            to="/projects"  
            style={pathname === '/projects' ? navLinkColor : null}>
            PROJECTS
            </Link>
          </li>
          <li>
            <Link 
            className="navbar-li" 
            to="/"
            style={pathname === '/' ? navLinkColor : null}>  
            ABOUT
            </Link>
          </li>
          <li>
            <Link 
            className="navbar-li" 
            to="/contact"
            style={pathname === '/contact' ? navLinkColor : null}>  
           CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      </>
    );
  }

export default Navbar