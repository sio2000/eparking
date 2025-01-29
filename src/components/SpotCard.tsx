import { Box, Text, Badge, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ParkingSpot } from '../types';

interface SpotCardProps {
  spot: ParkingSpot;
}

const SpotCard = ({ spot }: SpotCardProps) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
    >
      <VStack align="stretch" spacing={2}>
        <Badge colorScheme={spot.size === 'large' ? 'green' : spot.size === 'medium' ? 'blue' : 'gray'}>
          {spot.size}
        </Badge>
        <Text fontSize="sm">
          Location: {spot.location.lat.toFixed(4)}, {spot.location.lng.toFixed(4)}
        </Text>
        <Text fontSize="sm">
          Available until: {spot.expiresAt.toLocaleTimeString()}
        </Text>
        <Button
          as={Link}
          to={`/spot/${spot.id}`}
          size="sm"
          colorScheme="blue"
        >
          View Details
        </Button>
      </VStack>
    </Box>
  );
};

export default SpotCard;