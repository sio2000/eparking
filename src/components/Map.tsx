import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ParkingSpot } from '../types';
import { Box, useToast } from '@chakra-ui/react';
import L from 'leaflet';

// Create custom icons
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const parkingIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapProps {
  spots: ParkingSpot[];
}

function LocationMarker() {
  const [position, setPosition] = useState<L.LatLng | null>(null);
  const map = useMap();
  const toast = useToast();

  useEffect(() => {
    map.locate({
      setView: true,
      maxZoom: 16,
      enableHighAccuracy: true
    }).on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 16);
    }).on('locationerror', () => {
      toast({
        title: 'Location Error',
        description: 'Unable to find your location. Please enable location services.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      map.setView([40.7128, -74.0060], 13);
    });

    return () => {
      map.stopLocate();
    };
  }, [map, toast]);

  return position === null ? null : (
    <Marker position={position} icon={userIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Map = ({ spots }: MapProps) => {
  return (
    <Box h="100%" w="100%" borderRadius="lg" overflow="hidden">
      <MapContainer
        center={[40.7128, -74.0060]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
        {spots.map((spot) => (
          <Marker
            key={spot.id}
            position={[spot.location.lat, spot.location.lng]}
            icon={parkingIcon}
          >
            <Popup>
              <div>
                <strong>Parking Spot</strong><br />
                Size: {spot.size}<br />
                Status: {spot.status}<br />
                Available until: {spot.expiresAt.toLocaleTimeString()}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Map;