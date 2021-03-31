import React from 'react';
import { Icon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  Text,
  Heading,
  Box,
  Divider,
  Center,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

function NavigationBar() {
  return (
    <Box>
      <Heading
        textAlign="center"
        marginTop="10px"
        textColor="white"
        fontSize="3xl"
      >
        Dashboard
      </Heading>
      <Center height="50px">
        <Divider orientation="horizontal" width="150px" />
      </Center>
      <List spacing={6} marginTop="40px">
        <ListItem>
          <LinkBox maxW="xl" maxH="50px" p="4">
            <Text
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
              textColor="white"
            >
              <LinkOverlay href="/home">
                <Icon
                  as={FaHome}
                  w={4}
                  h={4}
                  marginRight="5px"
                  marginBottom="5px"
                />
                Home
              </LinkOverlay>
            </Text>
          </LinkBox>
        </ListItem>
        <ListItem>
          <LinkBox maxW="xl" maxH="50px" p="4">
            <Text
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
              textColor="white"
            >
              <LinkOverlay href="/table">
                Table
                <ChevronRightIcon w={6} h={6} />
              </LinkOverlay>
            </Text>
          </LinkBox>
        </ListItem>
        <ListItem>
          <LinkBox maxW="xl" maxH="50px" p="4">
            <Text
              fontSize="lg"
              fontWeight="bold"
              textAlign="center"
              textColor="white"
            >
              <LinkOverlay href="/contact-us">
                Contact Us
                <ChevronRightIcon w={6} h={6} />
              </LinkOverlay>
            </Text>
          </LinkBox>
        </ListItem>
      </List>
    </Box>
  );
}
export default NavigationBar;
