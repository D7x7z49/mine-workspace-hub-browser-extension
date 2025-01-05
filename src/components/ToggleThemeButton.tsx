import React from 'react';
import { useCallbackRef } from '@radix-ui/react-use-callback-ref';
import { IconButton, Tooltip, useThemeContext } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useConfigStore } from '@workspacehub/config/useConfigStore';

function ToggleThemeButton() {
  const { onAppearanceChange } = useThemeContext();
  const { theme, setAppearance } = useConfigStore();

  const disableAnimation = () => {
    const css = document.createElement('style');
    css.appendChild(
      document.createTextNode(
        `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
      ),
    );
    document.head.appendChild(css);

    return () => {
      (() => window.getComputedStyle(document.body))();
      setTimeout(() => {
        document.head.removeChild(css);
      }, 1);
    };
  };

  const updateRootAppearanceClass = (appearance: 'light' | 'dark') => {
    const root = document.documentElement;
    const hasLightTheme = root.classList.contains('light-theme');
    const hasDarkTheme = root.classList.contains('dark-theme');
    const hasLight = root.classList.contains('light');
    const hasDark = root.classList.contains('dark');

    if (hasLightTheme || hasDarkTheme) {
      root.classList.remove('light-theme', 'dark-theme');
      root.style.colorScheme = appearance;
      root.classList.add(`${appearance}-theme`);
    }

    if (hasLight || hasDark) {
      root.classList.remove('light', 'dark');
      root.style.colorScheme = appearance;
      root.classList.add(appearance);
    }

    if (!hasLightTheme && !hasDarkTheme && !hasLight && !hasDark) {
      root.style.colorScheme = appearance;
      root.classList.add(appearance);
    }
  };

  const toggleTheme = useCallbackRef(() => {
    const cleanup = disableAnimation();

    if (theme.appearance === 'light' || theme.appearance === 'dark') {
      const newAppearance = theme.appearance === 'light' ? 'dark' : 'light';
      onAppearanceChange(newAppearance);
      setAppearance(newAppearance);
      updateRootAppearanceClass(newAppearance);
    } else if (theme.appearance === 'inherit') {
      const newAppearance = 'dark';
      onAppearanceChange(newAppearance);
      setAppearance(newAppearance);
      updateRootAppearanceClass(newAppearance);
    }

    cleanup();
  });

  return (
    <Tooltip content="Toggle theme">
      <IconButton radius="full" onClick={toggleTheme}>
        {theme.appearance === 'dark' ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default ToggleThemeButton;
