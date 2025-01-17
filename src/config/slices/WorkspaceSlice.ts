import { ConfigStateCreator, WorkspaceMode, WorkspaceSlice, WorkspaceState } from './interfaces';

const initialWorkspaceState: WorkspaceState = {
  workspace: 'default',
};

const createWorkspaceSlice: ConfigStateCreator<WorkspaceSlice> = (set) => ({
  ...initialWorkspaceState,
  resetWorkspace: () => set(() => initialWorkspaceState),
  setWorkspace: (mode: WorkspaceMode) =>
    set((state) => {
      state.workspace = mode;
    }),
});

export { createWorkspaceSlice, WorkspaceSlice };
