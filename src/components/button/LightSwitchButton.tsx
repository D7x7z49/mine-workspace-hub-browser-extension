import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';

const LightSwitchButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>;
};

export default LightSwitchButton;
