import { Box, Heading, VStack, HStack, Text, Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';

const ParkingHistory = () => {
  const mockHistory = [
    {
      id: 1,
      date: '2024-02-10',
      location: 'Downtown',
      status: 'Completed',
    },
    // Add more mock history items as needed
  ];

  return (
    <Box>
      <Heading mb={6}>Parking History</Heading>
      
      <StatGroup mb={8}>
        <Stat>
          <StatLabel>Total Parkings</StatLabel>
          <StatNumber>24</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Points Earned</StatLabel>
          <StatNumber>120</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Spots Shared</StatLabel>
          <StatNumber>15</StatNumber>
        </Stat>
      </StatGroup>

      <Heading size="md" mb={4}>Recent Parkings</Heading>
      <VStack spacing={4} align="stretch">
        {mockHistory.map((item) => (
          <HStack
            key={item.id}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            justify="space-between"
          >
            <VStack align="start" spacing={1}>
              <Text fontWeight="bold">{item.location}</Text>
              <Text fontSize="sm" color="gray.600">{item.date}</Text>
            </VStack>
            <Text
              color={item.status === 'Completed' ? 'green.500' : 'gray.500'}
            >
              {item.status}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ParkingHistory;