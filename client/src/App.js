import React, {useState } from 'react';

import Locations from './components/Locations';

import Users from './components/Users';

import { Grid, Typography, Paper, Button } from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DarkMode from './components/DarkMode'
function App() {


  // const [darkMode, setDarkMode] = useState(false)
  // const theme = createTheme({
  //   palette: {
  //     type: darkMode ? "dark" : "light",
  //   }
  // })

  return (
  
   <DarkMode />
  
  
  );
  
}

export default App;
