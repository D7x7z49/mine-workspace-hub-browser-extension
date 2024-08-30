import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


const Home: React.FC = () => {


    return (
        <div>
            <ul>
                <li>
                    <ChakraLink as={ReactRouterLink} to='/test/main'>
                        Core Test
                    </ChakraLink>
                </li>
                <li>
                    <ChakraLink as={ReactRouterLink} to='/test/TestLayout'>
                        TestLayout
                    </ChakraLink>
                </li>
            </ul>
        </div>
    );
};

export default Home;
