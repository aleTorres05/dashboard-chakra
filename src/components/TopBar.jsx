import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import MenuProfile from './MenuProfile';
import DrawerNavBar from './HomePage/DrawerNavBar';

function SideNavBar() {
  return (
    <SimpleGrid columns={3}>
      <Box padding="3">
        <DrawerNavBar />
      </Box>
      <Box>
        <Heading
          marginTop="9"
          textAlign="center"
          fontFamily="heading"
          letterSpacing="9px"
        >
          DASHBOARD
        </Heading>
      </Box>
      <Box padding="5" textAlign="end" marginTop="4">
        <MenuProfile />
      </Box>
    </SimpleGrid>
  );
}

export default SideNavBar;
