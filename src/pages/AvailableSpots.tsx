import { Box, Heading, Input, SimpleGrid, Select } from '@chakra-ui/react';
import { useParkingStore } from '../store/parkingStore';
import SpotCard from '../components/SpotCard';
import Map from '../components/Map';

const AvailableSpots = () => {
  const { filteredSpots, filterOptions, setFilterOptions } = useParkingStore();

  return (
    <Box>
      <Heading mb={4}>Available Parking Spots</Heading>
      <Box mb={4}>
        <Input
          placeholder="City/Area"
          mb={2}
        />
        <Select
          value={filterOptions.size}
          onChange={(e) => setFilterOptions({ size: e.target.value as any })}
          mb={2}
        >
          <option value="all">All Sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </Select>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mb={4}>
        {filteredSpots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </SimpleGrid>
      <Box h="400px">
        <Map spots={filteredSpots} />
      </Box>
    </Box>
  );
}

export default AvailableSpots;