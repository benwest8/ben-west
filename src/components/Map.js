import React from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';


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

export default class MyMap extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          center: [0, 0],
          zoom: 0,
      };
    }

    componentDidMount() {
        new Map({
          target: "map-container",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        });
    }

    render() {
        return (
        <div style={{height:'80',width:'80%'}} id="map-container" className="map-container" />
        );
    }
}