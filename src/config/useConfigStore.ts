import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { LocalStorage } from '@workspacehub/utils/storage';

type ThemeAppearance = ['light', 'dark'];
type ThemeAccentColor = [
  'gray',
  'gold',
  'bronze',
  'brown',
  'yellow',
  'amber',
  'orange',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'lime',
  'mint',
  'sky',
];
type ThemeGrayColor = ['auto', 'gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];
type ThemePanelBackground = ['solid', 'translucent'];
type ThemeRadius = ['none', 'small', 'medium', 'large', 'full'];
type ThemeScaling = ['90%', '95%', '100%', '105%', '110%'];
type MineTheme = {
  appearance: ThemeAppearance[number];
  accentColor: ThemeAccentColor[number];
  grayColor: ThemeGrayColor[number];
  resolvedGrayColor: ThemeGrayColor[number];
  panelBackground: ThemePanelBackground[number];
  radius: ThemeRadius[number];
  scaling: ThemeScaling[number];
};

type ConfigState = {
  theme: MineTheme;
};

type ConfigActions = {
  setTheme: (theme: MineTheme) => void;
  setAppearance: (appearance: ThemeAppearance[number]) => void;
  setAccentColor: (accentColor: ThemeAccentColor[number]) => void;
  setGrayColor: (grayColor: ThemeGrayColor[number]) => void;
  setResolvedGrayColor: (resolvedGrayColor: ThemeGrayColor[number]) => void;
  setPanelBackground: (panelBackground: ThemePanelBackground[number]) => void;
  setRadius: (radius: ThemeRadius[number]) => void;
  setScaling: (scaling: ThemeScaling[number]) => void;
  resetConfig: () => void;
};

const initialState: ConfigState = {
  theme: {
    appearance: 'light',
    accentColor: 'gray',
    grayColor: 'auto',
    resolvedGrayColor: 'auto',
    panelBackground: 'solid',
    radius: 'medium',
    scaling: '100%',
  },
};

/**
 * Custom hook to manage configuration state using Zustand, Immer, and local storage persistence.
 *
 * @returns {ConfigState & ConfigActions} The current configuration state and actions to update it.
 *
 * @example
 * const { theme, setTheme, resetConfig } = useConfigStore();
 *
 * @remarks
 * This hook uses Zustand for state management, Immer for immutable state updates, and
 * local storage for state persistence. The state includes theme settings such as appearance,
 * accent color, gray color, resolved gray color, panel background, radius, and scaling.
 *
 * @property {Theme} theme - The current theme configuration.
 * @property {function} setTheme - Function to set the theme.
 * @property {function} setAppearance - Function to set the appearance of the theme.
 * @property {function} setAccentColor - Function to set the accent color of the theme.
 * @property {function} setGrayColor - Function to set the gray color of the theme.
 * @property {function} setResolvedGrayColor - Function to set the resolved gray color of the theme.
 * @property {function} setPanelBackground - Function to set the panel background of the theme.
 * @property {function} setRadius - Function to set the radius of the theme.
 * @property {function} setScaling - Function to set the scaling of the theme.
 * @property {function} resetConfig - Function to reset the configuration to its initial state.
 */
const useConfigStore = create<ConfigState & ConfigActions>()(
  persist(
    immer((set) => ({
      ...initialState,
      setTheme: (theme) =>
        set((state) => {
          state.theme = theme;
        }),
      setAppearance: (appearance) =>
        set((state) => {
          state.theme.appearance = appearance;
        }),
      setAccentColor: (accentColor) =>
        set((state) => {
          state.theme.accentColor = accentColor;
        }),
      setGrayColor: (grayColor) =>
        set((state) => {
          state.theme.grayColor = grayColor;
        }),
      setResolvedGrayColor: (resolvedGrayColor) =>
        set((state) => {
          state.theme.resolvedGrayColor = resolvedGrayColor;
        }),
      setPanelBackground: (panelBackground) =>
        set((state) => {
          state.theme.panelBackground = panelBackground;
        }),
      setRadius: (radius) =>
        set((state) => {
          state.theme.radius = radius;
        }),
      setScaling: (scaling) =>
        set((state) => {
          state.theme.scaling = scaling;
        }),
      resetConfig: () =>
        set((state) => {
          state.theme = initialState.theme;
        }),
    })),
    {
      name: 'config-storage',
      storage: createJSONStorage(() => LocalStorage),
    },
  ),
);

export { MineTheme, useConfigStore };
