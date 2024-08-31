import React from 'react';

interface JumpButtonProps {
  label: string;
  targetUrl: string;
  checkIfOpen?: boolean; // Optional parameter to check if the tab is already open
}

const JumpButton: React.FC<JumpButtonProps> = ({ label, targetUrl, checkIfOpen = true }) => {
  const handleClick = async () => {
    const homeUrl = chrome.runtime.getURL(targetUrl);

    if (checkIfOpen) {
      // Check if the target URL is already open
      const tabs = await chrome.tabs.query({});

      const isTabOpen = tabs.some((tab) => tab.url === homeUrl);

      if (isTabOpen) {
        // The tab is already open, no need to create a new one
        return;
      }
    }

    // If the tab is not open or checkIfOpen is false, create a new tab
    chrome.tabs.create({ url: homeUrl });
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default JumpButton;
