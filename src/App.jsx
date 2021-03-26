import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Dashboard />
      </Router>
    </ChakraProvider>
  );
}
export default App;
