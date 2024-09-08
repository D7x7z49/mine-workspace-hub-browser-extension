// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useRef, MouseEvent, useCallback, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useBoolean, Grid, GridItem, useOutsideClick } from '@chakra-ui/react';

const TestPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const logBookmarks = () => {
    chrome.runtime.sendMessage({ action: 'logBookmarks' }, (response) => {
      console.log(response.status);
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testWork = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const test = process.env;
    console.log(process.env.NODE_ENV);
    console.log(process.env.REACT_APP_API_KEY_TEST);
    console.log(process.env.IS_TEST_ENV);
  };

  return <div>Hello TestPage</div>;
};

export default TestPage;
