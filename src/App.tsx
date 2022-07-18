import React from 'react';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import HomeScreen from './screens/HomeScreen';

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box p={'20px 30px 0px 30px'} as='header' width={'100%'} display={'flex'} flexDir={'row'} justifyContent={'space-between'}>
      <IconButton
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        variant='outline'
        colorScheme='cyan'
        aria-label='Color mode switcher'
        onClick={toggleColorMode}
        width={'40px'}
        height={'40px'}
      />
      <HomeScreen />
    </Box>
  );
}

export default App;
