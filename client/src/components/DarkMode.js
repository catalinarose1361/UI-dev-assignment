import React, {useState } from 'react';

import Locations from './Locations';

import Users from './Users';

import { Grid, Typography, Paper, Button } from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//DARK MODE CONTAINS THEMING AND GRID ELEMENTS FOR THE APP
function DarkMode () {
    const [darkMode, setDarkMode] = useState(false)
    const theme = createTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        }
      })
    return(
        <ThemeProvider theme={theme}>
     
            <Grid  container>
                <Grid item>
                   
                        <Paper>
                            <Locations item={true} />
                        </Paper>
                   
                  
                </Grid>
             
                <Grid  item >
                 
                    <Paper>
                    <Users item={true} />  
                    </Paper>
                
                   

                  
                    </Grid>
                <Grid  item>
              
                    <Switch item={true} checked={darkMode} onChange={() => setDarkMode(!darkMode)} name="checkedA" />
            
                    
                    </Grid>
         
            {/* <Users item={true} /> */}
  
  {/* <Locations item={true} /> */}
  {/* <Switch item={true} checked={darkMode} onChange={() => setDarkMode(!darkMode)} name="checkedA" /> */}
        

       

            </Grid>
        
        
       
      
        {/* </Paper> */}
      </ThemeProvider>

    )
}

export default DarkMode;