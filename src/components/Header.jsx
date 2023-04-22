//navbar 
import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {BiLogIn , BiInjection,BiStore} from 'react-icons/bi'
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function Header() {

  const location = useLocation();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (location.pathname === "/"
    || location.pathname === "/cadastro") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [location]);



  return (
    
      <Navbar bg="warning" variant="dark" className="p-1 ">
        <img 
            src="src/assets/favicon.ico" 
            id="img"
            alt="logo" 
            className="p-3" 
            width="70"
            height="70"
            />
        <Navbar.Brand href="#home">
          
          <h5 id="h5" >Pharmacy Central System</h5>
          </Navbar.Brand>
      
          <Nav className="me-auto my-2 my-sm-0 d-block">
            
            
          <Link 

            className="nav-item btn p-1" 
            to="/"
            > <BiLogIn 
              className=" link"
              />{" "}
              Login
            
            </Link>
          {
            disabled ? null :
          <Link 
            className="nav-item btn p-1" 
            to="/farmacias"
            disabled={true}
            >
              <BiStore className="nav-item link"/>{" "}
              Farmácias
            </Link>
          }
          {
            disabled ? null :
          <Link 
            className="nav-item btn p-1" 
            to="/medicamentos"
            disabled={false}
            >
              <BiInjection className="link"/>{" "}
              Medicamentos
            </Link>
          }
          
        </Nav>
      </Navbar>
   
  );
}

export default Header;