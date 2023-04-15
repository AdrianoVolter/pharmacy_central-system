//navbar 
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {



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
          <Link className="btn" to="/inicio">login</Link>
          <Link className="btn" to="/farmacias">Farmácias</Link>
          <Link className="btn" to="/formulario">Cadastrar Farmacia</Link>
          <Link className="btn" to="/formulario_med">Cadastrar Medicamentos</Link>
          <Link className="btn" to="/medicamentos">Lista Medicamentos</Link>

        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;