import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import MenuProfile from './MenuProfile';

function SideNavBar() {
  return (
    <Box padding="5" textAlign="end">
      <Breadcrumb separator="" spacing="15px">
        <BreadcrumbItem>
          <BreadcrumbLink href="#"></BreadcrumbLink>
          <MenuProfile />
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
}

export default SideNavBar;
