import React, { useState, useRef } from 'react';
import {
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function MenuProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  return (
    <Menu border="1px" textAlign="center" p={2}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Ryan Florence
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={() => setIsOpen(true)}>Sign Out</MenuItem>
      </MenuList>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Signing Out...
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to sign out?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Sign Out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence"></Avatar>
    </Menu>
  );
}
export default MenuProfile;
