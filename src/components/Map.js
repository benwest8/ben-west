import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {

   // could easily make this feature an entire tour of my life 
   const position = [40.703, -105.0085856]
   const schoolPosition = [45.542740, -94.444473]
   const alaskaPosition = []

   const customIcon = new Icon({
    iconUrl: "/icons8-select-24.png",
    iconSize: [20, 20]
  })

    return (
        <div className="leaflet-container">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                     Wellington, CO. Currently home.
                </Popup>
            </Marker>
            <Marker position={schoolPosition} >
                <Popup>
                    Saint John's University, MN
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
};