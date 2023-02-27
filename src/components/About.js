import React from 'react';
import Card from 'react-bootstrap/Card';
import Resume from '../images/BenWest_Resume.pdf';
import Button from 'react-bootstrap/Button';

class About extends React.Component {
    render() {
      return (
        <>
          <Card border="darker" bg="primary" fluid style={{ width: '35rem' }}>
            <Card.Header><b>About Me</b></Card.Header>
            <Card.Body>
              <Card.Text text="dark">
                <p>I'm a software engineer interested in modern full-stack web development. I'm currently gaining programming skills in JavaScript, React, Node.js, and Python. I'm also expirimenting with modern open-source GIS tools like QGIS. In my free time, I like to get outside or play guitar!</p>
                <a href={Resume} alt="image" target="_blank" rel="noreferrer">
                  <div className="mb-2">
                    <Button variant="secondary" size="lg">
                      Check out my Resume
                    </Button>{' '}
                  </div>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      );
    }
  }

  export default About;