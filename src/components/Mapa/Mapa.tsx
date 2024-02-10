import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";

const center: { lat: number; lng: number } = { lat: 4.5400213, lng: -75.6958065 };

const Mapa: React.FC = () => {
  return (
    <MapContainer center={center} zoom={13} className="map-container">
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default Mapa;
