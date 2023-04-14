//navbar 

import { Navbar, Nav } from "react-bootstrap";
function Header() {



  return (
    <div className="row d-flex">
      <Navbar bg="secondary" variant="dark" className="p-1">
        <img 
            src="src/assets/favicon.ico" 
            alt="" 
            className="p-3" 
            width="70"
            height="70"
            />
        <Navbar.Brand href="#home">Phamacy Central System</Navbar.Brand>
        <Nav className="my-2 my-sm-0">
          <Nav.Link className="login" href="#home">login</Nav.Link>
          {/* <Nav.Link href="#a3a18ftures">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;