import React from 'react';
import {Nav,Navbar,Form,Button} from 'react-bootstrap';
import Logo from '../assets/logo.png';
import '../style/Navbars.css';



function Navbars() {
  return (
    <div className="App">
      
      <Navbar  expand="lg">
  <Navbar.Brand href="#home" className="nav-brand">
  <img
        src={Logo}
        width="95"
        height="25"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="Nav">Why Rotation ?</Nav.Link>
      <Nav.Link href="#link">Solution</Nav.Link>
      <Nav.Link href="#link">Enterprise</Nav.Link>
      <Nav.Link href="#link">Pricing</Nav.Link>
      <Nav.Link href="#link">Resource</Nav.Link>

      <Nav.Link href="#link" className="nav-rigth">Sign in</Nav.Link>
        <Button variant="primary" className="btn-started"><b>Get Started</b></Button>
      
    </Nav>
    <Form inline className="frm-reg">
       
    </Form>
  </Navbar.Collapse>
</Navbar>

    </div>
  );
}

export default Navbars;
