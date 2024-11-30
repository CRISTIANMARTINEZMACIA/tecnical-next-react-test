"use client";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: '/icon-ubication.png', // Asegúrate de que este archivo esté en la carpeta /public
  iconSize: [20, 30], // Tamaño del ícono
  iconAnchor: [20, 50], // Punto donde el ícono apunta
  popupAnchor: [0, -50], // Posición del popup relativo al ícono
});

const MapLeaflet = () => {
  const center: LatLngExpression = [7.58707, -73.66266]; // Latitud y longitud
  const zoom = 7;
  const valledupar: LatLngExpression = [10.46314, -73.25322];
  const bogota: LatLngExpression = [4.711, -74.0721];
  return (
    <div>
      <MapContainer
        className="w-full"
        style={{ height: "900px" }}
        center={center}
        zoom={zoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={bogota} icon={customIcon}>
          <Popup>Un marcador en Bogota</Popup>
        </Marker>
        <Marker position={valledupar} icon={customIcon}>
          <Popup>Un marcador en Valledupar</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
