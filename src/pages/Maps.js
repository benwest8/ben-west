import React from 'react';
import Map from '../components/Map'
import { Image } from 'react-bootstrap';
import riparian_map from '../images/Riparian_FinalMap.png'

class Maps extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h1>Maps</h1>
                    {/* <p>Teacher story of map making - 1st day of GIS</p> */}
                    <Map />
                    <Image src={ riparian_map }></Image>
                </div>
            </>
        );
    }
}

export default Maps;

/* 
import Image from 'react-bootstrap/Image';
import lory_map from '../src/images/lory_map.png'
import Riparian_Map from '../src/images/Riparian_FinalMap.png'


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
*/