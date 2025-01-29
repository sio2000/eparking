import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AvailableSpots from './pages/AvailableSpots';
import Unpark from './pages/Unpark';
import SpotDetails from './pages/SpotDetails';
import Leaderboard from './pages/Leaderboard';
import ParkingHistory from './pages/ParkingHistory';
import Settings from './pages/Settings';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box display="flex" minH="100vh">
          <Sidebar />
          <Box flex="1" ml="60px" p={4} bg="gray.50">
            <Routes>
              <Route path="/" element={<AvailableSpots />} />
              <Route path="/unpark" element={<Unpark />} />
              <Route path="/spot/:id" element={<SpotDetails />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/history" element={<ParkingHistory />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;