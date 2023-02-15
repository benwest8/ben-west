import React from 'react';

import ContactCard from '../components/ContactCard';
import Technologies from '../components/Technologies';
import EducationCard from '../components/EducationCard';
import GuideSlide from '../components/Carousel';
import About from '../components/About';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {

  render() {
    return (
      <>
         <Container fluid>
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
            <Row style={{ display: 'flex' }}>
              <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Technologies />
              </Col>
            </Row>
          </Container>
      </>
    )
  }
}

export default Home;