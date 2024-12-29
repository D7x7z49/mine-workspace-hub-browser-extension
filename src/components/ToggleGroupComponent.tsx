import React from 'react';
import { Dialog, Flex, Grid, IconButton, Popover, Separator, Text, Tooltip } from '@radix-ui/themes';

interface TooltipIconButtonProps {
  tooltipContent?: string;
  icon: React.ReactNode;
  typeButton: navigationButton | dialogButton | popoverButton;
}

interface navigationButton {
  id: 'navigation';
  onClick: () => void;
}

interface dialogButton {
  id: 'dialog';
  content: React.ReactNode;
}

interface popoverButton {
  id: 'popover';
  content: React.ReactNode;
}

interface FlexToggleGroupComponentProps {
  buttons: TooltipIconButtonProps[];
  separator?: boolean;
}

interface GridToggleGroupComponentProps {
  buttons: TooltipIconButtonProps[];
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
}

const TooltipIconButtonComponent: React.FC<TooltipIconButtonProps> = ({
  icon,
  tooltipContent,
  typeButton: typeButton,
}) => {
  const tooltip = tooltipContent ? <Tooltip content={tooltipContent}>{icon}</Tooltip> : icon;
  const iconButton =
    typeButton.id === 'navigation' ? (
      <IconButton onClick={typeButton.onClick}>{tooltip}</IconButton>
    ) : (
      <IconButton>{tooltip}</IconButton>
    );

  switch (typeButton.id) {
    case 'dialog':
      return (
        <Dialog.Root>
          <Dialog.Trigger>{iconButton}</Dialog.Trigger>
          <Dialog.Content>{typeButton.content || <Text>Default dialog content</Text>}</Dialog.Content>
        </Dialog.Root>
      );

    case 'popover':
      return (
        <Popover.Root>
          <Popover.Trigger>{iconButton}</Popover.Trigger>
          <Popover.Content>{typeButton.content || <Text>Default popover content</Text>}</Popover.Content>
        </Popover.Root>
      );

    default:
      return iconButton;
  }
};

const FlexToggleGroupComponent: React.FC<FlexToggleGroupComponentProps> = ({ buttons, separator = false }) => {
  return (
    <Flex
      gap="2"
      align="center"
      style={{
        padding: '10px',
      }}>
      {buttons.map((button, index) => (
        <React.Fragment key={index}>
          <TooltipIconButtonComponent {...button} />
          {separator && index < buttons.length - 1 && <Separator orientation="vertical" />}
        </React.Fragment>
      ))}
    </Flex>
  );
};

const GridToggleGroupComponent: React.FC<GridToggleGroupComponentProps> = ({ buttons, columns = '3' }) => {
  return (
    <Grid
      gap="2"
      columns={columns}
      width="auto"
      style={{
        padding: '10px',
      }}>
      {buttons.map((button, index) => (
        <React.Fragment key={index}>
          <TooltipIconButtonComponent {...button} />
        </React.Fragment>
      ))}
    </Grid>
  );
};

export { TooltipIconButtonProps, FlexToggleGroupComponent, GridToggleGroupComponent };
