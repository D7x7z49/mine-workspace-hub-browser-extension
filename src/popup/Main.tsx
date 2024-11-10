import React from 'react';

import { Text, Button, Box } from '@radix-ui/themes';

const Main: React.FC = () => {
  return (
    <Box width="320px" height="320px">
      <Text>Hello WebExtension from Radix Themes</Text>
      <Button>go</Button>
    </Box>
  );
};

export default Main;
