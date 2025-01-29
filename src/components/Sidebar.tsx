import { Box, VStack, Icon, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaParking, FaCar, FaTrophy, FaHistory, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Box
      w="60px"
      h="100vh"
      bg="gray.800"
      color="white"
      py={4}
      position="fixed"
      left={0}
    >
      <VStack spacing={6}>
        <Tooltip label="Available Spots" placement="right">
          <Link to="/">
            <Icon as={FaParking} w={6} h={6} />
          </Link>
        </Tooltip>
        <Tooltip label="Unpark" placement="right">
          <Link to="/unpark">
            <Icon as={FaCar} w={6} h={6} />
          </Link>
        </Tooltip>
        <Tooltip label="Leaderboard" placement="right">
          <Link to="/leaderboard">
            <Icon as={FaTrophy} w={6} h={6} />
          </Link>
        </Tooltip>
        <Tooltip label="History" placement="right">
          <Link to="/history">
            <Icon as={FaHistory} w={6} h={6} />
          </Link>
        </Tooltip>
        <Tooltip label="Settings" placement="right">
          <Link to="/settings">
            <Icon as={FaCog} w={6} h={6} />
          </Link>
        </Tooltip>
      </VStack>
    </Box>
  );
}

export default Sidebar;