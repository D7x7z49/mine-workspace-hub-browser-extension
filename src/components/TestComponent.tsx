import React, { useState } from 'react';
import * as styles from '@styles/TestComponent.module.scss';


const TestComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={`${styles.myComponent} ${styles.slideIn}`}>
      <h1 className={styles.heading}>Hello, world!</h1>
      <p className={styles.paragraph}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => {
        const homeUrl = chrome.runtime.getURL('home.html');
        chrome.tabs.create({ url: homeUrl });
      }}>xxx</button>
    </div>
  );
};

export default TestComponent;
