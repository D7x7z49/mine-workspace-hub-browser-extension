// src/popup/Main.tsx

import React from 'react';
// import { useTranslation } from 'react-i18next';

import { Box, Flex, Heading, ScrollArea } from '@radix-ui/themes';

import { BookmarkIcon, CounterClockwiseClockIcon, GearIcon, HomeIcon } from '@radix-ui/react-icons';

import * as styles from '@workspacehub/popup/popup.module.css';
import {
  FlexToggleGroupComponent,
  GridToggleGroupComponent,
  TooltipIconButtonProps,
} from '@workspacehub/components/ToggleGroupComponent';
import ToggleThemeButton from '@workspacehub/components/ToggleThemeButton';
import { openExtensionPage } from '@workspacehub/utils/navigation';

const Main: React.FC = () => {
  // const { t } = useTranslation();

  const navButtons: TooltipIconButtonProps[] = [
    {
      icon: <HomeIcon />,
      tooltipContent: 'Go to Home',
      typeButton: {
        id: 'navigation',
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
    },
    {
      icon: <BookmarkIcon />,
      tooltipContent: 'Go to Home',
      typeButton: {
        id: 'navigation',
        onClick: () => alert('Home clicked'),
      },
    },
    {
      icon: <CounterClockwiseClockIcon />,
      tooltipContent: 'Open Settings',
      typeButton: {
        id: 'navigation',
        onClick: () => alert('Settings clicked'),
      },
    },
    {
      icon: <GearIcon />,
      tooltipContent: 'Go to Home',
      typeButton: {
        id: 'navigation',
        onClick: () => alert('Home clicked'),
      },
    },
  ];

  const toolButtons: TooltipIconButtonProps[] = [
    {
      icon: <HomeIcon />,
      tooltipContent: 'Go to Home',
      typeButton: {
        id: 'dialog',
        content: (
          <Flex direction="column" gap="2">
            <Box>Popover content</Box>
            <Box>Popover content</Box>
            <Box>Popover content</Box>
          </Flex>
        ),
      },
    },
    {
      icon: <GearIcon />,
      tooltipContent: 'Open Settings',
      typeButton: {
        id: 'popover',
        content: (
          <Flex direction="column" gap="2">
            <Box>Popover content</Box>
            <Box>Popover content</Box>
            <Box>Popover content</Box>
          </Flex>
        ),
      },
    },
  ];

  return (
    <Flex
      height="98vh"
      direction="column"
      gap="3"
      overflow="hidden"
      className={styles.popupContainer}
      style={{
        background: 'var(--gray-a2)',
        borderTop: '1px dashed var(--gray-a7)',
        borderBottom: '1px dashed var(--gray-a7)',
      }}>
      <Flex height="12vh" direction="column" align="center" justify="center" className={styles.popupHeader}>
        <Heading align="center">Mine WorkspaceHub</Heading>
      </Flex>

      <Flex justify="between" align="center" className={styles.popupNavigation}>
        <FlexToggleGroupComponent buttons={navButtons} separator />
        <Flex justify="center" align="center" width="64px" height="64px">
          <ToggleThemeButton />
        </Flex>
      </Flex>

      <Flex direction="column" align="center" justify="center" className={styles.popupTools}>
        <GridToggleGroupComponent buttons={toolButtons} columns="7" />
      </Flex>

      <Flex direction="column" align="center" justify="center" className={styles.popupRecents}>
        <ScrollArea type="always" scrollbars="vertical">
          <Box p="2" pr="8">
            xxxxxxxxxxxxxxxxx
          </Box>
        </ScrollArea>
      </Flex>
    </Flex>
  );
};

export default Main;
