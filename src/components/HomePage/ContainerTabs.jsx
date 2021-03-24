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
  Box,
} from '@chakra-ui/react';

function ContainerTabs() {
  return (
    <Container bg="#ebebeb">
      <Heading marginBottom="3px">Employees</Heading>
      <Tabs variant="soft-rounded" colorScheme="purple">
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
            <Box>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Box>
          </TabPanel>
          <TabPanel>
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </TabPanel>
          <TabPanel>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          </TabPanel>
          <TabPanel>
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
          </TabPanel>
          <TabPanel>
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </TabPanel>
          <TabPanel>
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
export default ContainerTabs;
