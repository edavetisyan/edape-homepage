import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react'

const  MyThemeButton : React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
    <Box>
        <IconButton
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        variant='outline'
        colorScheme='cyan'
        aria-label='theme switcher'
        onClick={toggleColorMode}
        width={'40px'}
        height={'40px'}
      />
    </Box>
  )
}

export default MyThemeButton;