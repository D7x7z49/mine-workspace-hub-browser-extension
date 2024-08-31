// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useRef, MouseEvent, useCallback, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useBoolean, Grid, GridItem, useOutsideClick } from '@chakra-ui/react';
import { throttle } from 'lodash';

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

  const [navWidth, setNavWidth] = useState(150); // 初始 nav 宽度
  const [isResizing, setIsResizing] = useBoolean();

  const resizeRef = useRef(null);
  const navRef = useRef(null);

  const navWidthRef = useRef(navWidth);
  const isResizingRef = useRef(isResizing);

  useEffect(() => {
    navWidthRef.current = navWidth;
    isResizingRef.current = isResizing;
  }, [navWidth, isResizing]);

  const startResizing = useCallback(() => {
    if (!isResizingRef.current) {
      setIsResizing.on();
    }
  }, [setIsResizing]);

  const stopResizing = useCallback(() => {
    setIsResizing.off();
  }, [setIsResizing]);

  const handleMouseMove = useCallback(
    throttle((e) => {
      requestAnimationFrame(() => {
        if (isResizingRef.current) {
          const newWidth = e.clientX;
          if (newWidth !== navWidthRef.current) {
            setNavWidth(newWidth);
          }
        }
      });
    }, 15),
    [],
  );

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mouseup', stopResizing);
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopResizing);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopResizing);
      handleMouseMove.cancel(); // 取消 debounce 队列中的待处理事件
    };
  }, [isResizing, handleMouseMove, stopResizing]);

  return (
    <Grid
      templateAreas={`
            "header header header"
            "nav resize main"
            "footer footer footer"
          `}
      gridTemplateRows="50px 1fr 30px"
      gridTemplateColumns={`${navWidth}px 5px 1fr`}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold">
      <GridItem bg="orange.300" area="header">
        Header
      </GridItem>
      <GridItem ref={navRef} bg="pink.300" area="nav">
        Nav
      </GridItem>
      <GridItem ref={resizeRef} bg="tomato" area="resize" cursor="col-resize" onMouseDown={startResizing} />
      <GridItem bg="green.300" area="main">
        Main
      </GridItem>
      <GridItem bg="blue.300" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
};

export default TestPage;
