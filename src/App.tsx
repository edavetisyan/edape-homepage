import React from 'react';
import './App.css';
import { Box, Heading } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box maxWidth='960px' as='div' >
      <Heading as='h2'>chakra app</Heading>
    </Box>
  );
}

export default App;
