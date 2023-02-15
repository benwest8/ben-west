import React from 'react';
import EducationCard from '../components/EducationCard'
import Image from 'react-bootstrap/Image';
import SJU_Logo from '../images/sjuLogo.png';
import senate_Logo from '../images/senateLogo.png';
import soccer_Logo from '../images/sjuSoccerLogo.png';
import uai_Logo from '../images/uaiLogo.png'


class Education extends React.Component {
    render() {
      return (
        <>
          <EducationCard />
          <Image src={SJU_Logo}></Image>
          <Image src={senate_Logo}></Image>
          <Image src={soccer_Logo}></Image>
          <Image src={uai_Logo}></Image>
        </>
      );
    }
  }

  export default Education;
