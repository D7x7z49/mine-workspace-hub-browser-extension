import React from 'react';

const HomePage: React.FC = () => {
    const logBookmarks = () => {
        chrome.runtime.sendMessage({ action: 'logBookmarks' }, response => {
            console.log(response.status);
        });
    };

    return (
        <button onClick={logBookmarks}>C</button>
    );
};

export default HomePage;
