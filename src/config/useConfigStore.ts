import { create, StoreApi, UseBoundStore } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { LocalStorage } from '@workspacehub/utils/storage';
import {
  ConfigStore,
  createLayoutSlice,
  createThemeSlice,
  createSharedSlice,
  createGlobalSlice,
  createWorkspaceSlice,
} from './slices';

type WithSelectors<S> = S extends { getState: () => infer T } ? S & { use: { [K in keyof T]: () => T[K] } } : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;

  store.use = Object.keys(store.getState()).reduce(
    (acc, key) => {
      acc[key as keyof typeof acc] = () => store((state) => state[key as keyof typeof state]);
      return acc;
    },
    {} as Record<keyof ReturnType<S['getState']>, () => unknown>,
  );

  return store;
};

const useConfigStoreBase = create<ConfigStore>()(
  immer(
    persist(
      (...args) => ({
        ...createThemeSlice(...args),
        ...createLayoutSlice(...args),
        ...createWorkspaceSlice(...args),
        ...createSharedSlice(...args),
        ...createGlobalSlice(...args),
      }),
      {
        name: 'config-storage',
        storage: createJSONStorage(() => LocalStorage),
      },
    ),
  ),
);

const useConfigStore = createSelectors(useConfigStoreBase) as WithSelectors<typeof useConfigStoreBase>;

export { useConfigStore, useConfigStoreBase };
