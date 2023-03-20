import React from 'react';
import { Image } from 'react-bootstrap';


import ContactCard from '../components/ContactCard';
import EducationCard from '../components/EducationCard';
import GuideSlide from '../components/Carousel';
import About from '../components/About';
import pro_photo from '../images/pro_photo.png';
// import WeatherCard from '../components/WeatherCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {

  return (
    <>
      <Container fluid>
        {/* <WeatherCard /> */}
        <Image src={pro_photo} style={{ height: 150, width: 160 }} roundedCircle alt="Profile Pic" />
        <Row>
          <div class="description">
            <h1><b>Hi, I'm Ben.</b></h1>
            <Col>
              <h2>This is my personal website I'm building using React</h2>
            </Col>
          </div>
        </Row>
        <br></br>
        <Row >
          <Col>
            <About />
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ContactCard />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <EducationCard />
          </Col>
          <Col >
            <GuideSlide />
          </Col>
        </Row>
      </Container>
    </>
  )
}