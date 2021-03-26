import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function MenuProfile() {
  let history = useHistory();
  function handelClick() {
    history.push('/login');
  }

  return (
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
        <Link to="/profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link to="/settings">
          <MenuItem>Settings</MenuItem>
        </Link>
        <MenuItem onClick={handelClick}>Sign Out</MenuItem>
      </MenuList>
      <Avatar
        name="Ryan Florence"
        src="https://bit.ly/ryan-florence"
        size="md"
      ></Avatar>
    </Menu>
  );
}
export default MenuProfile;
