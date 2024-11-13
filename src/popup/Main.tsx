import React from 'react';

import { Box, DropdownMenu, Flex, Grid, IconButton, Separator, TextField } from '@radix-ui/themes';

const Main: React.FC = () => {
  return (
    <Flex direction="column" width="360px">
      <Flex>
        <Box>
          <DropdownMenu.Root></DropdownMenu.Root>

          <TextField.Root></TextField.Root>
        </Box>
        <Box>
          <Flex>
            <IconButton></IconButton>
            <Separator orientation="vertical" />
            <IconButton></IconButton>
            <Separator orientation="vertical" />
            <IconButton></IconButton>
          </Flex>
        </Box>
      </Flex>
      <Grid></Grid>
    </Flex>
  );
};

export default Main;
