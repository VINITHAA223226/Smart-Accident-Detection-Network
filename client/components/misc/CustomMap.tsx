"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const mapPin = new Icon({
  iconUrl: "/assets/MapPin.png", // Make sure this exists in public/assets
  iconSize: [25, 35],
});

type Props = {};

export default function CustomMap({}: Props) {
  return (
    <div className="overflow-hidden h-[320px] rounded-md border-2">
      <MapContainer
        className="w-full h-full"
        center={[11.4970, 77.2771]} // Sathyamangalam location
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[11.4970, 77.2771]} icon={mapPin}>
          <Popup>
            <div>
              <p>
                Sathy - Bhavani State Highway,<br />
                Alathukombai, Post,<br />
                Sathyamangalam, Tamil Nadu 638401
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
