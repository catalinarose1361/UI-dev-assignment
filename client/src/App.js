import React from 'react';

import Locations from './components/Locations';

import Users from './components/Users';

import { Grid, Typography, Paper, Button } from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    palette: {
      type: "dark"
    }
  })
  return (
  
    <ThemeProvider theme={theme}>
      <Paper>
      <div>
      
      <Users />

      <Locations />
        
    </div>
      </Paper>
    </ThemeProvider>
  
  
  );
  
}

export default App;
