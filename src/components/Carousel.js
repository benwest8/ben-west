import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import KayakImage from '/Users/benwest/Projects/ben-west/src/images/kayak.jpeg';
import FishImage from '/Users/benwest/Projects/ben-west/src/images/fish.jpeg';
import SkiImage from '/Users/benwest/Projects/ben-west/src/images/ski.jpeg';

function GuideSlide() {
  return (
    <>
      <h2>Leadership Experience</h2>
      <p>During my early 20's, I chased outdoor guiding jobs. I gained invaluable experience communicating, educating, and working with all personality types.</p>
      <Carousel>
        <Carousel.Item style={{ backgroundColor: 'lightblue' }}>
          <Image src={KayakImage} style={{ height: 400, marginLeft: 130 }} fluid alt="First Slide - Kayak Pic" />
          <Carousel.Caption>
            <h3>Kayak Guide</h3>
            <p>Seward, AK - 2022</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ backgroundColor: 'darkgreen' }}>
          <Image src={SkiImage} style={{ height: 400, marginLeft: 130 }} alt="Second Slide - Ski Pic" />
          <Carousel.Caption>
            <h3>Ski Instructor</h3>
            <p>Winter Park, CO - 2022</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ backgroundColor: 'whitesmoke', justifyContent: 'center' }}>
          <Image src={FishImage} style={{ height: 400, marginLeft: 40 }}  alt="Third Slide - Fish Pic" />
          <Carousel.Caption>
          <h3>Fly Fishing Guide 2018-2020</h3>
            <p>Estes Park, CO</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </>
  );
}

export default GuideSlide;