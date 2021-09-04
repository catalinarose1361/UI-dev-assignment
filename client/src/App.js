import React, {useState } from 'react';

import Locations from './components/Locations';

import Users from './components/Users';

import { Grid, Typography, Paper, Button } from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
function App() {


  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    }
  })

  return (
  
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh"}}>
      <div>
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} name="checkedA" />
      <Users />

      <Locations />
        
    </div>
      </Paper>
    </ThemeProvider>
  
  
  );
  
}

export default App;
