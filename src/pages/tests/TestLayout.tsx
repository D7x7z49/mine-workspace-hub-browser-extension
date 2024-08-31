import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useBoolean, Grid, GridItem } from '@chakra-ui/react';
import { throttle } from 'lodash';

const TestLayout: React.FC = () => {
  // State to manage the width of the navigation pane
  // 管理导航面板宽度的状态
  const [navWidth, setNavWidth] = useState(150);

  // Boolean state to determine if resizing is in progress
  // 布尔状态来确定是否正在调整大小
  const [isResizing, setIsResizing] = useBoolean();

  // Refs to access DOM elements for resizing and navigation pane
  // 用于访问 DOM 元素的引用，用于调整大小和导航面板
  const resizeRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Refs to store the current state values for efficient access
  // 用于存储当前状态值的引用，以便高效访问
  const navWidthRef = useRef(navWidth);
  const isResizingRef = useRef(isResizing);

  // Update refs whenever navWidth or isResizing changes
  // 每当 navWidth 或 isResizing 更改时更新引用
  useEffect(() => {
    navWidthRef.current = navWidth;
    isResizingRef.current = isResizing;
  }, [navWidth, isResizing]);

  // Start resizing by setting isResizing to true
  // 通过将 isResizing 设置为 true 来开始调整大小
  const startResizing = useCallback(() => {
    if (!isResizingRef.current) {
      setIsResizing.on(); // Start resizing / 开始调整大小
    }
  }, [setIsResizing]);

  // Stop resizing by setting isResizing to false
  // 通过将 isResizing 设置为 false 来停止调整大小
  const stopResizing = useCallback(() => {
    setIsResizing.off(); // Stop resizing / 停止调整大小
  }, [setIsResizing]);

  // Handle mouse movement during resizing, with throttling to limit frequency
  // 处理调整大小期间的鼠标移动，使用节流来限制频率
  const handleMouseMove = useCallback(
    throttle((e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (isResizingRef.current) {
          const newWidth = e.clientX; // Calculate new width / 计算新宽度
          if (newWidth !== navWidthRef.current) {
            setNavWidth(newWidth); // Update nav width / 更新导航宽度
          }
        }
      });
    }, 15),
    [],
  ); // Throttle interval set to 15ms / 节流间隔设置为 15ms

  // Attach and detach event listeners for resizing
  // 附加和移除调整大小的事件监听器
  useEffect(() => {
    if (isResizing) {
      // Attach mousemove and mouseup events when resizing starts
      // Note: `mouseup` is attached first to ensure it handles the resizing stop correctly
      // 注意: `mouseup` 事件首先被附加，以确保它能正确处理调整大小停止
      document.addEventListener('mouseup', stopResizing);
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      // Remove event listeners when resizing stops
      // 移除调整大小停止时的事件监听器
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopResizing);
    }

    // Cleanup function to remove event listeners and cancel throttled calls
    // 清理函数以移除事件监听器和取消节流调用
    return () => {
      // Ensure to remove listeners to prevent memory leaks
      // 确保移除监听器以防止内存泄漏
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopResizing);
      handleMouseMove.cancel(); // Cancel pending throttled function calls / 取消待处理的节流函数调用
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
      <GridItem
        ref={resizeRef}
        bg="tomato"
        area="resize"
        cursor="col-resize"
        onMouseDown={startResizing} // Start resizing on mouse down directly on the resize area
        // 鼠标按下直接在调整大小区域上开始调整大小
      />
      <GridItem bg="green.300" area="main">
        Main
      </GridItem>
      <GridItem bg="blue.300" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
};

export default TestLayout;
