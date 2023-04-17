//navbar 
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {

  const location = useLocation();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [location]);



  return (
    <div className="row d-flex">
      <Navbar bg="secondary" variant="dark" className="p-1">
        <img 
            src="src/assets/favicon.ico" 
            alt="logo" 
            className="p-3" 
            width="70"
            height="70"
            />
        <Navbar.Brand href="#home">Phamacy Central System</Navbar.Brand>
        <Nav className="my-2 my-sm-0">
          <Link 
            className="btn" 
            to="/"
            >Login
            </Link>
          {
            disabled ? null :
          <Link 
            className="btn" 
            to="/farmacias"
            disabled={true}
            >Farmácias
            </Link>
          }
          {
            disabled ? null :
          <Link 
            className="btn" 
            to="/medicamentos"
            disabled={false}

            >Medicamentos
            </Link>
          }
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;