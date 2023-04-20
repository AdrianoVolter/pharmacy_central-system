//navbar 
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {BiLogIn , BiInjection,BiStore} from 'react-icons/bi'

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
      <Navbar bg="warning" variant="dark" className="p-1">
        <img 
            src="src/assets/favicon.ico" 
            alt="logo" 
            className="p-3" 
            width="70"
            height="70"
            />
        <Navbar.Brand href="#home">
          
          <h5 id="h5">Phamacy Central System</h5></Navbar.Brand>
        <Nav className="my-2 my-sm-0">
          <Link 
            
            className="btn p-3" 
            to="/"
            > <BiLogIn 
              className="link"
              />{" "}
              Login
            
            </Link>
          {
            disabled ? null :
          <Link 
            className="btn p-3" 
            to="/farmacias"
            disabled={true}
            >
              <BiStore className="link"/>{" "}
              Farmácias
            </Link>
          }
          {
            disabled ? null :
          <Link 
            className="btn p-3" 
            to="/medicamentos"
            disabled={false}
            >
              <BiInjection className="link"/>{" "}
              Medicamentos
            </Link>
          }
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;