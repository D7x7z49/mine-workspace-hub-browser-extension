import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


const Home: React.FC = () => {


    return (
        <div>
            <ChakraLink as={ReactRouterLink} to='/'>
                Home
            </ChakraLink>  
        </div>
    );
};

export default Home;
