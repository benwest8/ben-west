import React from 'react';
import Card from 'react-bootstrap/Card';
import Resume from '../images/ben_west_resume.pdf';
import Button from 'react-bootstrap/Button';

class About extends React.Component {
    render() {
      return (
        <>
          <Card border="darker" bg="primary" fluid style={{ width: '35rem' }}>
            <Card.Header><b>About Me</b></Card.Header>
            <Card.Body>
              <Card.Text text="dark">
                <p>Lorem ipsum dolor sit amet, consecteturgna aliqua. Ut enimis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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