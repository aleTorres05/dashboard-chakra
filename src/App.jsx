import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import NavigationBar from './components/NavigationBar';
import { Grid, GridItem } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import HomePage from './components/HomePage/HomePage';
import ContainerTabs from './components/HomePage/ContainerTabs';

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateRows="repeat(7, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={1}
      >
        <GridItem rowSpan={7} colSpan={1} bg="#524dff">
          <NavigationBar />
        </GridItem>
        <GridItem rowSpan={1} colSpan={6} bg="#ebebeb">
          <TopBar />
        </GridItem>
        <GridItem rowSpan={1} colSpan={2} bg="#ebebeb">
          <HomePage />
        </GridItem>
        <GridItem>
          <ContainerTabs />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
