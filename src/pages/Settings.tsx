import { Box, Heading, VStack, FormControl, FormLabel, Switch, Input, Button } from '@chakra-ui/react';

const Settings = () => {
  return (
    <Box>
      <Heading mb={6}>Settings</Heading>
      <VStack spacing={6} align="stretch" maxW="500px">
        <Box>
          <Heading size="md" mb={4}>Notification Preferences</Heading>
          <VStack spacing={4} align="stretch">
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">
                Enable notifications
              </FormLabel>
              <Switch id="notifications" defaultChecked />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">
                Sound alerts
              </FormLabel>
              <Switch id="sound-alerts" />
            </FormControl>
          </VStack>
        </Box>

        <Box>
          <Heading size="md" mb={4}>Parking Preferences</Heading>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Default spot size</FormLabel>
              <Input placeholder="Medium" />
            </FormControl>
            <FormControl>
              <FormLabel>Search radius (meters)</FormLabel>
              <Input type="number" defaultValue={1000} />
            </FormControl>
          </VStack>
        </Box>

        <Button colorScheme="blue" mt={4}>
          Save Settings
        </Button>
      </VStack>
    </Box>
  );
};

export default Settings;