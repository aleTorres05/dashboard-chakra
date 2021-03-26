import React from 'react';
import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Avatar,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';

function ContainerTabs() {
  return (
    <Container maxW="container.lg">
      <Heading marginBottom="10px" marginTop="5px" textAlign="start">
        Employees
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="orange">
        <TabList>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
          <Tab>4</Tab>
          <Tab>5</Tab>
          <Tab>6</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="2xl"
              />
              <GridItem colSpan={4}>
                <Text fontSize="md">
                  Also known as Software Engineers or Systems Programmers,
                  Computer Programmers are tasked with designing and creating
                  software programs, integrating systems and software, training
                  end-users, analyzing algorithms, modifying source-code,
                  writing system instructions, debugging, and maintaining
                  operating systems.
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              <Avatar
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
                size="2xl"
              />
              <GridItem colSpan={4}>
                <Text fontSize="md">
                  Also known as Software Engineers or Systems Programmers,
                  Computer Programmers are tasked with designing and creating
                  software programs, integrating systems and software, training
                  end-users, analyzing algorithms, modifying source-code,
                  writing system instructions, debugging, and maintaining
                  operating systems.
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              <Avatar
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
                size="2xl"
              />
              <GridItem colSpan={4}>
                <Text fontSize="md">
                  Also known as Software Engineers or Systems Programmers,
                  Computer Programmers are tasked with designing and creating
                  software programs, integrating systems and software, training
                  end-users, analyzing algorithms, modifying source-code,
                  writing system instructions, debugging, and maintaining
                  operating systems.
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
                size="2xl"
              />
              <GridItem colSpan={4}>
                <Text fontSize="md">
                  Also known as Software Engineers or Systems Programmers,
                  Computer Programmers are tasked with designing and creating
                  software programs, integrating systems and software, training
                  end-users, analyzing algorithms, modifying source-code,
                  writing system instructions, debugging, and maintaining
                  operating systems.
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              <Avatar
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
                size="2xl"
              />
              <GridItem colSpan={4}>
                <Text fontSize="md">
                  Also known as Software Engineers or Systems Programmers,
                  Computer Programmers are tasked with designing and creating
                  software programs, integrating systems and software, training
                  end-users, analyzing algorithms, modifying source-code,
                  writing system instructions, debugging, and maintaining
                  operating systems.
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              <Avatar
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
                size="2xl"
              />
              <GridItem colSpan={4}>
                <Text fontSize="md">
                  Also known as Software Engineers or Systems Programmers,
                  Computer Programmers are tasked with designing and creating
                  software programs, integrating systems and software, training
                  end-users, analyzing algorithms, modifying source-code,
                  writing system instructions, debugging, and maintaining
                  operating systems.
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
export default ContainerTabs;
