import React from 'react';
import { ThemeProvider } from '@mui/material';

import Header from './components/Header/Header';
import Countries from './components/Countries.tsx/Countries';
import { theme } from './theme'


const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header title='Countries'/>
        <Countries />
        </ThemeProvider> 
    </div>
  );
}

export default App;
