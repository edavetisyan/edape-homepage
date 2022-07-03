import React from 'react';
import { Box, Button, Heading, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box maxWidth='960px' as='div' bg='nord1'>
      <IconButton
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        variant='outline'
        colorScheme='cyan'
        aria-label='Color mode switcher'
        onClick={toggleColorMode}
      />
      <Heading as='h2'>chakra app</Heading>
      <Button
        variant='primary'
      >primary</Button>
    </Box>
  );
}

export default App;
