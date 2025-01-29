import { Box, Heading, Text, Button, VStack, useToast } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useParkingStore } from '../store/parkingStore';

const SpotDetails = () => {
  const { id } = useParams();
  const spots = useParkingStore((state) => state.spots);
  const spot = spots.find((s) => s.id === id);
  const toast = useToast();

  const navigateToSpot = () => {
    if (!spot) return;

    // Check if the browser supports geolocation
    if (!navigator.geolocation) {
      toast({
        title: 'Error',
        description: 'Geolocation is not supported by your browser',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Get current position and open in Google Maps
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: startLat, longitude: startLng } = position.coords;
        const { lat: endLat, lng: endLng } = spot.location;
        
        // Create Google Maps URL with current location and destination
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${startLat},${startLng}&destination=${endLat},${endLng}&travelmode=driving`;
        
        // Open in new tab
        window.open(mapsUrl, '_blank');
      },
      (error) => {
        let message = 'Unable to get your location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Please allow location access to use navigation';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information is unavailable';
            break;
          case error.TIMEOUT:
            message = 'Location request timed out';
            break;
        }
        toast({
          title: 'Error',
          description: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  };

  if (!spot) {
    return <Box>Spot not found</Box>;
  }

  return (
    <Box>
      <Heading mb={4}>Parking Spot Details</Heading>
      <VStack spacing={4} align="stretch">
        <Text>Size: {spot.size}</Text>
        <Text>Status: {spot.status}</Text>
        <Text>Location: {spot.location.lat}, {spot.location.lng}</Text>
        <Button colorScheme="blue" onClick={navigateToSpot}>
          Navigate to Spot
        </Button>
        <Button variant="outline">Report Issue</Button>
      </VStack>
    </Box>
  );
};

export default SpotDetails;