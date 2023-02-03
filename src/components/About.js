import React from 'react';
import Card from 'react-bootstrap/Card';
import Resume from '../images/BenWest_Resume_Indeed.png';
import Button from 'react-bootstrap/Button';

class About extends React.Component {
    render() {
      return (
        <>
          <Card border="darker" bg="primary" fluid style={{ width: '35rem' }}>
            <Card.Header><b>About Me</b></Card.Header>
            <Card.Body>
              <Card.Text text="dark">
                <p>I'm a web developer. My background consists of a traditional Computer Science Degree + professional full-stack development experience. I also like to play guitar and get outside when I can!</p>
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