import React from 'react';
import Card from 'react-bootstrap/Card';
import SchoolIcon from '@mui/icons-material/School';
import PlaceIcon from '@mui/icons-material/Place';

function EducationCard(props) {
  
      return (
        <>
          <Card border="dark" bg="dark" fluid style={{ width: '20rem' }}>
            <Card.Header><b>B.A. Computer Science</b></Card.Header>
            <Card.Body>
              <Card.Text text="dark" text-align="left">
                <p><SchoolIcon /> Saint John's University</p>
                <p><PlaceIcon /> Collegeville, MN</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      );
  }

  export default EducationCard;
