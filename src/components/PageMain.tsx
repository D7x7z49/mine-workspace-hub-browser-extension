import React from 'react';
import { WorkspaceMode } from '@workspacehub/config/slices/interfaces';

const DefaultWorkspace = () => <div>Default Workspace</div>;
const HistoryWorkspace = () => <div>History</div>;
const BookmarkWorkspace = () => <div>Bookmark</div>;
const NoteWorkspace = () => <div>Note</div>;

const workspaceComponents: Record<WorkspaceMode, React.ComponentType> = {
  default: DefaultWorkspace,
  history: HistoryWorkspace,
  bookmark: BookmarkWorkspace,
  note: NoteWorkspace,
};

const PageMain: React.FC<{
  workspace: WorkspaceMode;
}> = ({ workspace }) => {
  const WorkspaceComponent = workspaceComponents[workspace] || workspaceComponents.default;
  return <WorkspaceComponent />;
};

export default PageMain;
