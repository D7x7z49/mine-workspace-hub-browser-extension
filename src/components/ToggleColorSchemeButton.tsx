import React from 'react';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

const ToggleColorSchemeButton: React.FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="transparent"
      aria-label="Toggle color scheme">
      {computedColorScheme === 'light' ? <IconMoon /> : <IconSun />}
    </ActionIcon>
  );
};

export default ToggleColorSchemeButton;
