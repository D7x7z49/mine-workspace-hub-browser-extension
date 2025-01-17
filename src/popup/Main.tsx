import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppShell, Burger, Center, Flex, ScrollArea, Skeleton, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome } from '@tabler/icons-react';

import ToggleDarkMode from '@workspacehub/components/button/ToggleDarkMode';
import IconButtonGrid from '@workspacehub/components/IconButtonGrid';

import { openExtensionPage } from '@workspacehub/utils/navigation';

const popupIconsGridData = [
  {
    label: 'navbar',
    icons: [
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
    ],
  },
  {
    label: 'navbar',
    icons: [
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
      {
        label: 'home',
        icon: IconHome,
        onClick: async () => {
          await openExtensionPage('home/index.html');
        },
      },
    ],
  },
];

const Main: React.FC = () => {
  const { t } = useTranslation();

  const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure();

  return (
    <AppShell
      header={{ height: '3rem' }}
      footer={{ height: '2rem' }}
      navbar={{
        width: 100,
        breakpoint: 'sm',
        collapsed: {
          mobile: !navbarOpened,
        },
      }}>
      <AppShell.Header>
        <Flex h="100%" px="md" gap="md" justify="space-between" align="center" direction="row" wrap="wrap">
          <Burger
            aria-label={t('page:popup.navbarButton', 'open home navbar')}
            aria-expanded={navbarOpened}
            opened={navbarOpened}
            onClick={toggleNavbar}
            hiddenFrom="sm"
            size="sm"
          />
          <Flex gap="md" justify="space-around" align="center">
            <ToggleDarkMode />
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar>
        <AppShell.Section>
          <Center>History</Center>
        </AppShell.Section>
        <AppShell.Section p="sm" grow component={ScrollArea}>
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack p="sm" bg="var(--mantine-color-body)" align="stretch" justify="space-around" gap="md">
          {popupIconsGridData.map((value, index) => (
            <IconButtonGrid key={index} cols={5} label={value.label} icons={value.icons} />
          ))}
        </Stack>
      </AppShell.Main>
      <AppShell.Aside></AppShell.Aside>
      <AppShell.Footer></AppShell.Footer>
    </AppShell>
  );
};

export default Main;
