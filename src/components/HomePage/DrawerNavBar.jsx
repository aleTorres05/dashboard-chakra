import React from 'react';
import { useDisclosure } from '@chakra-ui/react';

import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NavigationBar from '../NavigationBar';

function DrawerNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        marginTop="35px"
        marginLeft="10px"
        onClick={onOpen}
        size="md"
        bg="#ebebeb"
        border="1px"
        borderColor="#eb7013"
      >
        <HamburgerIcon color="black" w={6} h={6} />
      </Button>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        size="xs"
        closeOnEsc
      >
        <DrawerOverlay>
          <DrawerContent bg="#eb7013">
            <DrawerBody>
              <NavigationBar />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
export default DrawerNavBar;
