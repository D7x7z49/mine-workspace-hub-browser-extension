import React from 'react';
import { Autocomplete, Flex, Group, ActionIcon, Center, SegmentedControl, VisuallyHidden } from '@mantine/core';
import {
  IconBookmark,
  IconHistory,
  IconHome,
  IconLayoutSidebar,
  IconLayoutSidebarRight,
  IconNote,
  IconSearch,
} from '@tabler/icons-react';
import ToggleDarkMode from './button/ToggleDarkMode';
import { useConfigStore } from '@workspacehub/config/useConfigStore';
import { WorkspaceMode } from '@workspacehub/config/slices/interfaces';
import { upperFirst } from '@mantine/hooks';

const WorkspaceModeSelector: React.FC = () => {
  const workspaceMode = useConfigStore.use.workspace();
  const setworkspaceMode = useConfigStore.use.setWorkspace();

  const dataWorkspaceMode = [
    { value: 'default', label: IconHome },
    { value: 'bookmark', label: IconBookmark },
    { value: 'note', label: IconNote },
    { value: 'history', label: IconHistory },
  ];

  function isWorkspaceMode(value: string): value is WorkspaceMode {
    const workspaceModeValues = dataWorkspaceMode.map((mode) => mode.value);
    return workspaceModeValues.includes(value);
  }

  return (
    <SegmentedControl
      size="xs"
      radius="xl"
      withItemsBorders={false}
      value={workspaceMode}
      onChange={(value: string) => {
        if (isWorkspaceMode(value)) {
          setworkspaceMode(value);
        }
      }}
      data={dataWorkspaceMode.map(({ value, label: Icon }) => ({
        value,
        label: (
          <Center>
            <Icon />
            <VisuallyHidden>{upperFirst(value)}</VisuallyHidden>
          </Center>
        ),
      }))}
    />
  );
};

const PageHeader: React.FC = () => {
  const toggleNavbar = useConfigStore.use.toggleNavbar();
  const toggleAside = useConfigStore.use.toggleAside();

  const basePadding = {
    base: 'xs',
    xs: 'sm',
    sm: 'md',
    md: 'lg',
    lg: 'xl',
    xl: 'xl',
  };

  return (
    <Flex bg="gray" w="100%" h="100%" px={basePadding} align="center" justify="space-between">
      {/* Left Group */}

      <WorkspaceModeSelector />

      {/* Center Autocomplete */}
      <Autocomplete
        w={{
          xs: 200,
          sm: 360,
          md: 480,
          lg: 600,
          xl: 750,
        }}
        variant="filled"
        radius="xl"
        placeholder="Autocomplete placeholder"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        leftSectionPointerEvents="none"
        leftSection={<IconSearch />}
      />

      {/* Right Group */}
      <Group>
        {/* Navbar Button */}
        <ActionIcon variant="transparent" onClick={toggleNavbar} aria-label="Toggle Navbar">
          <IconLayoutSidebar />
        </ActionIcon>

        {/* Aside Button */}
        <ActionIcon variant="transparent" onClick={toggleAside} aria-label="Toggle Aside">
          <IconLayoutSidebarRight />
        </ActionIcon>

        {/* Toggle Theme Button */}
        <ToggleDarkMode />
      </Group>
    </Flex>
  );
};

export default PageHeader;
