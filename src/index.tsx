import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from '@workspacehub/pages/AppRoutes';

const Root: React.FC = () => {

    return (
        <ChakraProvider>
            <AppRoutes />
        </ChakraProvider>
    );
};


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
