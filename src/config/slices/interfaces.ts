import { MantineThemeOverride } from '@mantine/core';
import { StateCreator } from 'zustand';

/**
 * GlobalSlice
 */
export interface GlobalState {
  language: string;
  darkMode: 'light' | 'dark' | 'system';
}

export interface GlobalActions {
  resetGlobal: () => void;
}

export type GlobalSlice = GlobalState & GlobalActions;

/**
 * ThemeSlice
 */
export interface ThemeState {
  theme: MantineThemeOverride;
}

export interface ThemeActions {
  resetTheme: () => void;
}

export type ThemeSlice = ThemeState & ThemeActions;

/**
 * LayoutSlice
 */
export type NavbarType = 'default' | 'tree' | 'compact';
export type Asidemode = 'panel' | 'drawer';

export interface LayoutState {
  main: {
    mode: 'default' | 'single' | 'split' | null;
  };
  navbar: {
    opened: boolean;
    mode: 'default' | 'single' | 'split' | null;
  };
  aside: {
    opened: boolean;
    mode: 'default' | 'single' | 'split' | null;
  };
}

export interface LayoutActions {
  resetLayout: () => void;
  toggleNavbar: () => void;
  toggleAside: () => void;
  // setWorkspace:
}

export type LayoutSlice = LayoutState & LayoutActions;

/**
 * WorkspaceSlice
 */
export const workspaceModes = ['default', 'history', 'bookmark', 'note'] as const;
export type WorkspaceMode = (typeof workspaceModes)[number];

export interface WorkspaceState {
  workspace: WorkspaceMode;
}

export interface WorkspaceActions {
  resetWorkspace: () => void;
  setWorkspace: (mode: WorkspaceMode) => void;
}

export type WorkspaceSlice = WorkspaceState & WorkspaceActions;

/**
 * SharedSlice
 */
export interface SharedSlice {
  resetAll: () => void;
}

/**
 * useConfigStore
 */
export type ConfigStore =
  // GlobalSlice &
  ThemeSlice & LayoutSlice & WorkspaceSlice & SharedSlice & GlobalSlice;

export type ConfigStateCreator<T> = StateCreator<
  ConfigStore,
  [
    ['zustand/immer', never],
    // ["zustand/devtools", never],
    ['zustand/persist', unknown],
  ],
  [],
  T
>;
