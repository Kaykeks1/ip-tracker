import './Map.scss';
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Icon } from "leaflet";

type Prop = {
  lat: number
  lng: number
}

function SetViewOnClick({ coords }: any) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

function Map({lat, lng}: Prop) {
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
    iconSize: [38, 38]
  });
  return (
    <div className="map">
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        style={{ height: '70vh', width: 'auto' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon} />
        <SetViewOnClick coords={[lat, lng]} />
      </MapContainer>
    </div>
  );
}

export default Map;
