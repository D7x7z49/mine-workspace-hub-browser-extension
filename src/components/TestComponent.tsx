import React, { useState } from 'react';

const TestComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => {
        const homeUrl = chrome.runtime.getURL('home.html');
        chrome.tabs.create({ url: homeUrl });
      }}>xxx</button>
    </div>
  );
};

export default TestComponent;
