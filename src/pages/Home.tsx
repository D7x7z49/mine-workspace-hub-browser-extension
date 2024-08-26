import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


const Home: React.FC = () => {
    const logBookmarks = () => {
        chrome.runtime.sendMessage({ action: 'logBookmarks' }, response => {
            console.log(response.status);
        });
    };

    return (
        <div>
            <ChakraLink as={ReactRouterLink} to='/'>
                Home
            </ChakraLink>
            <button onClick={logBookmarks}>C</button>
        </div>

    );
};

export default Home;
