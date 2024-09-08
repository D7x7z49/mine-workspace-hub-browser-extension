import React from 'react';
import { Link as ReactRouterLink, Outlet } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

const Layout: React.FC = () => {
  return (
    <div>
      <h1>Layout</h1>
      <ul>
        <li>
          <ChakraLink as={ReactRouterLink} to="/">
            /H.
          </ChakraLink>
        </li>
        <li>
          <ChakraLink as={ReactRouterLink} to="/home">
            home
          </ChakraLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
