import React from 'react';
import {Jumbotron,Container,Row,Col,Button} from 'react-bootstrap';
import '../style/Jumbotron.css';
import img from '../assets/images-jm.png';
function Jumbotrons() {
  return (
    <div className="App">
      
      <Jumbotron fluid className="jumbotron">
  <Container>
  
  <Row>
    <Col> <h1 className="txt-header">Open Source Team 
    <div className="txt-comunicate">Comunnication</div></h1>
    <p className="txt-desc">
    With all of your communication and tools in one
    <br/> place, remote teams will stay productive no 
    <br/>matter where you’re working from.
    </p>
   
    <div className="potition-btn">
      <Button  size="lg" className="btn-try"><p className="txt-btn">TRY ROTATION FOR FREE</p></Button>
      <Button variant="outline-primary" size="lg" className="btn-learn"><p className="txt-btn">LEARN MORE</p></Button>
    </div>

    </Col>

    <Col><img src={img} className="img-users"/></Col>
  </Row>
   
  </Container>
</Jumbotron>

    </div>
  );
}

export default Jumbotrons;
