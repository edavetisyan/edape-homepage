import React from 'react';
import { Box} from '@chakra-ui/react';
import HomeScreen from './screens/HomeScreen';
import Header from './screens/components/Header';

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <HomeScreen />
    </Box>
  );
}

export default App;
