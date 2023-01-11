import React from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

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