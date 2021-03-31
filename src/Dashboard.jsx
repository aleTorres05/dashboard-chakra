import React from 'react';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import Stats from './components/HomePage/Stats';
import ContainerTabs from './components/HomePage/ContainerTabs';
import TableExample from './components/TablePage/TableExample';
import TableExampleStrip from './components/TablePage/TableExampleStrip';
import ContactUs from './components/contact/ContactUs';

function Dashboard() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Grid templateColumns="repeat(8, 1fr)" gap={3} overflow="auto">
        <GridItem rowSpan={1} colSpan={9}>
          <Route
            path="/"
            render={() => (
              <Box bg="#ebebeb" border="2px" borderColor="#eb7013">
                <TopBar />
              </Box>
            )}
          />
        </GridItem>
        <GridItem colStart={1} colEnd={4}>
          <Route
            path="/home"
            render={() => (
              <Box bg="#ebebeb" border="2px" borderColor="#eb7013">
                <Stats />
              </Box>
            )}
          ></Route>
        </GridItem>
        <GridItem colStart={4} colEnd={10}>
          <Route
            path="/home"
            render={() => (
              <Box bg="#ebebeb" border="2px" borderColor="#eb7013">
                <ContainerTabs />
              </Box>
            )}
          ></Route>
        </GridItem>
        <GridItem colStart={1} colEnd={5}>
          <Route
            path="/table"
            render={() => (
              <Box bg="#ebebeb" border="2px" borderColor="#eb7013">
                <TableExample />
              </Box>
            )}
          />
        </GridItem>
        <GridItem colStart={5} colEnd={10}>
          <Route
            path="/table"
            render={() => (
              <Box bg="#ebebeb" border="2px" borderColor="#eb7013">
                <TableExampleStrip />
              </Box>
            )}
          />
        </GridItem>
        <GridItem rowStart={2} colStart={1} colEnd={10}>
          <Route
            path="/contact-us"
            render={() => (
              <Box bg="#ebebeb" border="2px" borderColor="#eb7013">
                <ContactUs />
              </Box>
            )}
          />
        </GridItem>
      </Grid>
    </Switch>
  );
}
export default Dashboard;
