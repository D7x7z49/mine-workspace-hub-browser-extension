// src/popup/Main.tsx

import React from 'react';
// import { useTranslation } from 'react-i18next';

import { Button, Flex, Stack, useMantineColorScheme } from '@mantine/core';
import { useConfigStore } from '@workspacehub/config/useConfigStore';

const Main: React.FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const { theme, resetTheme, throwError } = useConfigStore();

  return (
    <Stack h={300} bg="var(--mantine-color-body)" align="stretch" justify="flex-start" gap="md">
      <Flex mih={50} bg="rgba(0, 0, 0, .3)" gap="md" justify="center" align="center" direction="row" wrap="wrap">
        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button
          onClick={() => {
            console.log(theme);
          }}>
          Button 3
        </Button>
        <Button
          onClick={() => {
            resetTheme();
            console.log(theme);
          }}>
          Button 3
        </Button>
        <Button
          onClick={() => {
            throwError();
            console.log(theme);
          }}>
          Error
        </Button>
      </Flex>
      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
};

export default Main;
