import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppShell } from '@mantine/core';
import PageHeader from '@workspacehub/components/PageHeader';
import PageFooter from '@workspacehub/components/PageFooter';
import { useConfigStore } from '@workspacehub/config/useConfigStore';
import PageNavbar from '@workspacehub/components/PageNavbar';
import PageAside from '@workspacehub/components/PageAside';
import PageMain from '@workspacehub/components/PageMain';

const Main: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  const workspaceState = useConfigStore.use.workspace();
  const navbar = useConfigStore.use.navbar();
  const aside = useConfigStore.use.aside();

  // const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{
        height: 'calc(3rem + 1.2vh)',
        offset: true,
      }}
      footer={{
        height: 'calc(2rem + 0.5vh)',
        offset: true,
      }}
      navbar={{
        width: 'calc(12rem + 8vw)',
        collapsed: { mobile: true, desktop: !navbar.opened },
        breakpoint: 'sm',
      }}
      aside={{
        width: 'calc(8rem + 6vw)',
        collapsed: { mobile: true, desktop: !aside.opened },
        breakpoint: 'sm',
      }}
      // withBorder={false}
    >
      <AppShell.Header>
        <PageHeader />
      </AppShell.Header>
      <AppShell.Navbar>{<PageNavbar workspace={workspaceState} />}</AppShell.Navbar>
      <AppShell.Main>{<PageMain workspace={workspaceState} />}</AppShell.Main>
      <AppShell.Aside>{<PageAside workspace={workspaceState} />}</AppShell.Aside>
      <AppShell.Footer>
        <PageFooter />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Main;
