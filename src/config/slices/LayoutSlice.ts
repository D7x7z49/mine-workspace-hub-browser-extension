import { ConfigStateCreator, LayoutSlice, LayoutState } from './interfaces';

const initialLayoutState: LayoutState = {
  main: {
    mode: null,
  },
  navbar: {
    opened: false,
    mode: null,
  },
  aside: {
    opened: false,
    mode: null,
  },
};

const createLayoutSlice: ConfigStateCreator<LayoutSlice> = (set) => ({
  ...initialLayoutState,
  resetLayout: () =>
    set(
      () => initialLayoutState,
      // undefined,
      // 'layout/resetLayout'
    ),
  toggleNavbar: () =>
    set(
      (state) => {
        state.navbar.opened = !state.navbar.opened;
      },
      // undefined,
      // 'layout/toggleNavbar'
    ),
  toggleAside: () =>
    set(
      (state) => {
        state.aside.opened = !state.aside.opened;
      },
      // undefined,
      // 'layout/toggleAside'
    ),
});

export { createLayoutSlice, LayoutSlice };
