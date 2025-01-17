import React from 'react';

import { Box, Flex } from '@mantine/core';

const PageFooter: React.FC = () => {
  return (
    <Flex bg="gray" w="100%" h="100%" px="xl" align="center" justify="space-between">
      <Box variant="default">1</Box>
      <Box variant="default">2</Box>
      <Box variant="default">3</Box>
    </Flex>
  );
};

export default PageFooter;
