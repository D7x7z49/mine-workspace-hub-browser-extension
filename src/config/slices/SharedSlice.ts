import { ConfigStateCreator, SharedSlice } from './interfaces';

const createSharedSlice: ConfigStateCreator<SharedSlice> = (set, get) => ({
  resetAll: () => {
    get().resetTheme();
    get().resetLayout();
  },
});

export { createSharedSlice };
