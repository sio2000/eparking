import { Box, Heading, Button, VStack, useToast } from '@chakra-ui/react';
import { useParkingStore } from '../store/parkingStore';

const Unpark = () => {
  const toast = useToast();
  const addSpot = useParkingStore((state) => state.addSpot);

  const handleUnpark = (size: 'small' | 'medium' | 'large') => {
    // In a real app, we would get the user's location here
    const newSpot = {
      id: Math.random().toString(36).substr(2, 9),
      userId: 'current-user-id',
      size,
      location: {
        lat: 40.7128,
        lng: -74.0060,
      },
      status: 'available' as const,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 30 * 60000), // Expires in 30 minutes
    };

    addSpot(newSpot);
    toast({
      title: 'Spot shared successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Heading mb={8}>Unpark</Heading>
      <VStack spacing={4} align="stretch" maxW="300px" mx="auto">
        <Button size="lg" onClick={() => handleUnpark('small')}>
          Small
        </Button>
        <Button size="lg" onClick={() => handleUnpark('medium')}>
          Medium
        </Button>
        <Button size="lg" onClick={() => handleUnpark('large')}>
          Large
        </Button>
      </VStack>
    </Box>
  );
};

export default Unpark;