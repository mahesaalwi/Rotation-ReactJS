import React,{useState} from 'react';
import {Jumbotron,Container,Row,Col,Button,Carousel,Table} from 'react-bootstrap';
import Client from '../assets/images-fiture.png';
import Shape from '../assets/shapes.png';
import IconOne from '../assets/icon-1.png';
import IconTwo from '../assets/icon-2.png';
import IconThree from '../assets/icon-3.png';

import '../style/Body.css';
import Trusted from '../assets/trusted.png';

import ItemsCarousel from 'react-items-carousel'; 
  





function Body() {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

  return (
    <div className="App">

      <h4><b>Trusted By</b></h4>
      <img src={Trusted} alt="trusted-by"/>

      {/* Body section */}
      <Container>

   
    
  <Row className="body-secsion">

  <Col>
 {/* shapes */}
 <img src={Shape} className="img-shape"/>
  </Col>

    <Col>
   
    {/* Text */}
    <h1 className="txt-body">Open Source Team 
    Comunnication</h1>
    <p className="txt-body-desc">
    With all of your communication and tools in one
    <br/> place, remote teams will stay productive no 
    <br/>matter where you’re working from.
    </p>
    </Col>
    
    <Col>
        {/* Images */}
        <img src={Client} className="img-client"/>
    </Col>
  </Row>


  
  </Container>


  {/* Focus and Goals Grid */}

  

  <Container>
  <h3 className="txt-focus">Focus on shared goals</h3>
  <Row>
    <Col>
        {/*  */}
        <img src={IconOne} className="img-team"/>
        {/* Text */}
        <h5 className="txt-team">Colaboration Team</h5>
        <p className="txt-team-desc">
        Productive teamwork happens in
        <br/> channels — organized spaces for 
        <br/>everything related to a project, topic or
        <br/> team.
        </p>
    </Col>

    
    <Col>
        {/*  */}
        <img src={IconThree} className="img-team"/>
        {/* Text */}
        <h5 className="txt-team">Colaboration Team</h5>
        <p className="txt-team-desc">
        Productive teamwork happens in
        <br/> channels — organized spaces for 
        <br/>everything related to a project, topic or
        <br/> team.
        </p>
    </Col>


    <Col>
        {/*  */}
        <img src={IconTwo} className="img-team"/>
        {/* Text */}
        <h5 className="txt-team">Colaboration Team</h5>
        <p className="txt-team-desc">
        Productive teamwork happens in
        <br/> channels — organized spaces for 
        <br/>everything related to a project, topic or
        <br/> team.
        </p>
    </Col>
 
  </Row>

</Container>  


{/* Team Secsion */}
<Container>
 
  <Row className="body-secsion">
    <Col>
           
            {/*  */}
    <img src={Shape} className="img-shape-work"/>
    </Col>

    <Col>
        {/*  */}
        <div className="box-img"></div>
    </Col>

    <Col>
     {/*  */}
     <h2 className="txt-team-work">Reliable and work wisely</h2>
            <p className="txt-work-desc">
            Productive teamwork happens in
            <br/> channels — organized spaces for 
            <br/>everything related to a project, topic or
            <br/> team.
            </p>
    
    </Col>
  </Row>
</Container>

{/* image-two */}
<Container>
 
  <Row className="body-secsion">

     <Col>
         {/*  */}
     <h2 className="txt-team-working">Reliable and work wisely</h2>
            <p className="txt-working-desc">
            Productive teamwork happens in
            <br/> channels — organized spaces for 
            <br/>everything related to a project, topic or
            <br/> team.
            </p>
    </Col>

    <Col>
   
             {/*  */}
        <div className="box-img-two"></div>
    
    </Col>
  </Row>
</Container>

<h3 className="txt-company">You're in good company</h3>
<p>some of the company teams we work with build a mutual trust</p>

{/* Crousel */}
<div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel className="carousel"
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}

         chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
        <div style={{ height: 200,  }} className="name microsoft"></div>
        <div style={{ height: 200,  }} className="name google"></div>
        <div style={{ height: 200,  }} className="name facebook"></div>

      </ItemsCarousel>
    </div>

    {/* images-info */}
    <div className="bg-info">
            
    </div>
    <div className="txt-info">
        <h3 style={{marginTop : 50}}>Choose a better way to work</h3>
        <Button  className="btn-try-info"><p className="info-btn">TRY ROTATION FOR FREE</p></Button>
    </div>
    {/* footer */}
    <div className="footer">
    {/* Body footer */}
 
    <Container>
 <Row>
    <Col>
    <h5 className="title">Product</h5>
            <ul className="content">
              <li className="list-unstyled">
                <a href="#!" className="link">Why Rotation ?</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Enterprise</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Customer Service</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Pricing</a>
              </li>
            </ul>
    </Col>
    <Col>
    <h5 className="title">Product</h5>
            <ul className="content">
              <li className="list-unstyled">
                <a href="#!" className="link">Why Rotation ?</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Enterprise</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Customer Service</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Pricing</a>
              </li>
            </ul>
    </Col>
    <Col><h5 className="title">Product</h5>
            <ul className="content">
              <li className="list-unstyled">
                <a href="#!" className="link">Why Rotation ?</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Enterprise</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Customer Service</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Pricing</a>
              </li>
            </ul></Col>
    <Col>
    <h5 className="title">Product</h5>
            <ul className="content">
              <li className="list-unstyled">
                <a href="" className="link">Why Rotation ?</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Enterprise</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Customer Service</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="link">Pricing</a>
              </li>
            </ul>
    </Col>
  </Row>
</Container>

    </div>

    </div>
  );
}

export default Body;

