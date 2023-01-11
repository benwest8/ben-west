import React from 'react';
import './App.css';

import Header from '../src/components/Header';
import ContactCard from '../src/components/ContactCard';
import MyMap from '../src/components/Map';
import Carousel from '../src/components/Carousel';
import Competencies from '../src/components/Competencies';
import TechSkills from './components/TechSkills';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image';
import lory_map from '../src/images/lory_map.png'
import Riparian_Map from '../src/images/Riparian_FinalMap.png'
import Resume from '../src/images/ben_west_resume.pdf';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  
  render() {

    return (
      <>
        <Header />
        <div className="App">
          <Container fluid>
            <div class="description">
              <h1><b>Hi, I'm Ben.</b></h1>
              <h2>Technology can save the world's climate crisis. I aspire to lead and enable solutions to get us there.</h2>
              <p>#sustainability #data #agile #GIS #cleanEnergy #entreprenuership</p>
            </div>
            
            <br></br>
            <Row >
              <Col>
                <ContactCard />
                <Competencies />
              </Col>
              <Col>
                <Alert variant="success">
                  <Alert.Heading>Maps</Alert.Heading>
                  <p>
                    Here are some maps I've made to demonstrate spatial concepts.
                  </p>
                </Alert>
                <Image src={lory_map} fluid alt="here" width="80%" />
                <Button variant="secondary" size="lg">
                  Learn About This Map
                </Button>{' '}
                <Image src={Riparian_Map} fluid alt="here" width="80%" />
              </Col>
                
            </Row>

            <Row>
              <Col>
                <Carousel />
              </Col>
              <Col>
              <TechSkills />
              </Col>
            </Row>
            
                <a href={Resume} alt="imagge" target="_blank" rel="noreferrer">
                <div className="mb-2">
                <Button variant="secondary" size="lg">
                  See Resume
                </Button>{' '}
                </div>
                </a>

                <div id="map">
              <MyMap />
            </div>
          </Container>
      </div>
      </>
    )
  }
}

export default App;