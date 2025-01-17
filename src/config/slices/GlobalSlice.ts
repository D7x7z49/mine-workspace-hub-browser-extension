import { ConfigStateCreator, GlobalSlice, GlobalState } from './interfaces';

const initialGlobalState: GlobalState = {
  language: 'zh-CN',
  darkMode: 'system',
};

const createGlobalSlice: ConfigStateCreator<GlobalSlice> = (set) => ({
  ...initialGlobalState,
  resetGlobal: () => set(() => initialGlobalState),
});

export { createGlobalSlice, GlobalSlice };
