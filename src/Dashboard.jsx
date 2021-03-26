import React from 'react';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import Stats from './components/HomePage/Stats';
import ContainerTabs from './components/HomePage/ContainerTabs';
import TableExample from './components/TableExample';

function Dashboard() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route
        path="/"
        render={() => (
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(7, 2fr)"
            gap={5}
          >
            <GridItem
              rowSpan={1}
              colSpan={7}
              bg="#ebebeb"
              border="2px"
              borderColor="#eb7013"
            >
              <TopBar />
            </GridItem>
            <GridItem
              rowSpan={1}
              colSpan={2}
              bg="#ebebeb"
              border="2px"
              borderColor="#eb7013"
            >
              <Stats />
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={3}
              bg="#ebebeb"
              border="2px"
              borderColor="#eb7013"
            >
              <ContainerTabs />
            </GridItem>
            <Route
              path="/table"
              render={() => (
                <GridItem
                  rowSpan={2}
                  colSpan={7}
                  bg="#ebebeb"
                  border="2px"
                  borderColor="#eb7013"
                >
                  <TableExample />
                </GridItem>
              )}
            />
          </Grid>
        )}
      />
    </Switch>
  );
}
export default Dashboard;
