import React from 'react';

import { Box, Button, DropdownMenu, Flex, Grid, IconButton, Separator, TextField } from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';

const Main: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Flex direction="column" width="360px">
      <Flex>
        <Flex>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                {t('popup.test', 'hello {{user_name}}', { user_name: 'jone' })}
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
          </DropdownMenu.Root>

          <TextField.Root></TextField.Root>
        </Flex>
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
