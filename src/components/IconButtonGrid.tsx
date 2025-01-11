import React from 'react';
import { IconZzz } from '@tabler/icons-react';
import { ActionIcon, SimpleGrid, Tooltip, Divider, Center } from '@mantine/core';

interface IconButtonProps {
  label: string;
  icon: typeof IconZzz;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <ActionIcon variant="light" aria-label={label} onClick={onClick}>
        <Icon size={32} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
};

interface IconButtonGridProps {
  cols: number;
  label: string;
  icons: IconButtonProps[];
}

const IconButtonGrid: React.FC<IconButtonGridProps> = ({ cols, label, icons }) => {
  return (
    <React.Fragment>
      <Divider label={label} labelPosition="center" />
      <SimpleGrid cols={cols}>
        {icons.map((value, index) => (
          <Center key={index}>
            <IconButton icon={value.icon} label={value.label} onClick={value.onClick} />
          </Center>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};

export default IconButtonGrid;
