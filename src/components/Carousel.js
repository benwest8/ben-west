import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import KayakImage from '/Users/benwest/Projects/ben-west/src/images/kayak.jpeg';
import FishImage from '/Users/benwest/Projects/ben-west/src/images/fish.jpeg';
import SkiImage from '/Users/benwest/Projects/ben-west/src/images/ski.jpeg';

function GuideSlide() {
  return (

    <Carousel>
    <h1>Outdoor Leadership Experience</h1>
      <Carousel.Item>
        <Image src={ KayakImage } width="50%" height="50%"  alt="First Slide" />
        <Carousel.Caption>
          <h3>Kayak Guide</h3>
          <p>Seward, AK - 2022</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        
        <Image src={ SkiImage } width="50%" height="50%" alt="Second Slide" />
        <Carousel.Caption>
          <h3>Ski Instructor</h3>
          <p>Winter Park, CO - 2022</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src={ FishImage } width="60%" height="60%" fluid alt="Third Slide" />
        <Carousel.Caption>
          <h3>Fly Fishing Guide 2018-2020</h3>
          <p>Estes Park, CO</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GuideSlide;