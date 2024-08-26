import React from 'react';
import {
    Button
} from '@chakra-ui/react'
import LightSwitchButton from '@workspacehub/components/button/LightSwitchButton';

const TestPage: React.FC = () => {

    const logBookmarks = () => {
        chrome.runtime.sendMessage({ action: 'logBookmarks' }, response => {
            console.log(response.status);
        });
    };
    const testWork = () => {
        console.log(process.env.NODE_ENV);
        
    };

    return (
        <div>
            <Button onClick={testWork}></Button>
            <LightSwitchButton />
        </div>

    );
};

export default TestPage;
