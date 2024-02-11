import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";

const center: { lat: number; lng: number } = { lat: 4.5434742, lng: -75.6829244 };

const Mapa: React.FC = () => {
  const [origin, setOrigin] = useState<string>("-1");
  const [destination, setDestination] = useState<string>("-1");
  const [showRoute, setShowRoute] = useState<boolean>(false);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][] | null>(null);

  const handleOriginChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDestination(event.target.value);
  };

  const handleShowRoute = () => {
    const coordinates = routes[`${origin} - ${destination}`];
    if (coordinates) {
      setRouteCoordinates(coordinates);
      setShowRoute(true);
    } else {
      setShowRoute(false);
      setRouteCoordinates(null);
    }
  };

  const routes = {
    "La clarita - La 19 con 21": [
      [4.5406412, -75.6874465],
      [4.535303, -75.675411]
    ],
    "La 19 con 21 - SENA": [
      [4.535303, -75.675411],
      [4.541491, -75.668710]
    ],
    // Puedes agregar más rutas aquí según sea necesario
  };

  return (
    <>
      <MapContainer center={center} zoom={13} className="map-container">
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {origin !== "-1" && (
          <Marker position={[parseFloat(origin.split(",")[0]), parseFloat(origin.split(",")[1])]}>
            <Popup>Ubicación de origen</Popup>
          </Marker>
        )}

        {destination !== "-1" && (
          <Marker position={[parseFloat(destination.split(",")[0]), parseFloat(destination.split(",")[1])]}>
            <Popup>Ubicación de destino</Popup>
          </Marker>
        )}

        {showRoute && routeCoordinates && (
          <Polyline positions={routeCoordinates} color="blue" />
        )}
      </MapContainer>

      <select name="origin" id="origin" onChange={handleOriginChange} value={origin}>
        <option value="-1">Seleccione una ubicación de origen</option>
        <option value="4.5406412,-75.6874465">La clarita</option>
        <option value="4.535303,-75.675411">La 19 con 21</option>
        <option value="4.541491,-75.668710">SENA</option>
      </select>

      <select name="destination" id="destination" onChange={handleDestinationChange} value={destination}>
        <option value="-1">Seleccione una ubicación de destino</option>
        <option value="4.5406412,-75.6874465">La clarita</option>
        <option value="4.535303,-75.675411">La 19 con 21</option>
        <option value="4.541491,-75.668710">SENA</option>
      </select>

      <button onClick={handleShowRoute}>Mostrar Ruta</button>
    </>
  );
};

export default Mapa;
