import { Box, Heading, VStack, HStack, Text, Avatar } from '@chakra-ui/react';

const Leaderboard = () => {
  const users = [
    { id: 1, name: 'John Doe', points: 1200, avatar: '' },
    { id: 2, name: 'Jane Smith', points: 980, avatar: '' },
    { id: 3, name: 'Bob Johnson', points: 850, avatar: '' },
    // Add more mock users as needed
  ];

  return (
    <Box>
      <Heading mb={6}>Leaderboard</Heading>
      <VStack spacing={4} align="stretch">
        {users.map((user, index) => (
          <HStack
            key={user.id}
            p={4}
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            justify="space-between"
          >
            <HStack spacing={4}>
              <Text fontSize="lg" fontWeight="bold">
                #{index + 1}
              </Text>
              <Avatar size="sm" name={user.name} src={user.avatar} />
              <Text>{user.name}</Text>
            </HStack>
            <Text fontWeight="bold">{user.points} points</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Leaderboard;