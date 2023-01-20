import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import KayakImage from '../images/kayak.jpeg';
import FishImage from '../images/fish.jpeg';
import SkiImage from '../src/images/ski.jpeg';

function GuideSlide() {
  return (
    <>
      <Card border="darker" bg="primary" fluid style={{ width: '35rem' }}>
        <Card.Body>
          <Card.Text text="dark" bottom>

            <Card.Header>Leadership Experience</Card.Header>
            <Card.Text>During my early 20's, I chased outdoor guiding jobs. I gained invaluable experience communicating, educating, and working with all personality types.</Card.Text>
            <Carousel>
              <Carousel.Item style={{ backgroundColor: 'lightgray' }}>
                <Image src={KayakImage} style={{ height: 400, marginLeft: 130 }} fluid alt="First Slide - Kayak Pic" />
                <Carousel.Caption>
                  <h3>Kayak Guide</h3>
                  <p>Seward, AK - 2022</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item style={{ backgroundColor: 'lightgray' }}>
                <Image src={SkiImage} style={{ height: 400, marginLeft: 130 }} alt="Second Slide - Ski Pic" />
                <Carousel.Caption>
                  <h3>Ski Instructor</h3>
                  <p>Winter Park, CO - 2022</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item style={{ backgroundColor: 'lightgray', justifyContent: 'center' }}>
                <Image src={FishImage} style={{ height: 400, marginLeft: 25 }} alt="Third Slide - Fish Pic" />
                <Carousel.Caption>
                  <h3>Fly Fishing Guide 2018-2020</h3>
                  <p>Estes Park, CO</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </Card.Text>
        </Card.Body>
      </Card>
    </>

  );
}

export default GuideSlide;