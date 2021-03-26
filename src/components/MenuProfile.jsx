import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
import Login from '../Login';

function MenuProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  return (
    <Router>
      <Menu textAlign="center">
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          size="md"
          marginTop="5px"
          border="1px"
          borderColor="#eb7013"
        >
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
                <Link to="/login">
                  <Button colorScheme="red" ml={3}>
                    Sign Out
                  </Button>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Avatar
          name="Ryan Florence"
          src="https://bit.ly/ryan-florence"
          size="md"
        ></Avatar>
      </Menu>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
export default MenuProfile;
