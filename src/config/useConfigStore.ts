import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { LocalStorage } from '@workspacehub/utils/storage';

import { createThemeSlice, ThemeSlice } from '@workspacehub/config/slices/theme';

const useConfigStore = create<ThemeSlice>()(
  persist(
    immer((...a) => ({
      ...createThemeSlice(...a),
    })),
    {
      name: 'config-storage',
      storage: createJSONStorage(() => LocalStorage),
    },
  ),
);

export { useConfigStore };
