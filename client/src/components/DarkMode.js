import React, {useState } from 'react';

import Locations from './Locations';

import Users from './Users';

import { Grid, Typography, Paper, Button, Container } from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
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
            <Container>
     
            <Grid direction="column" justify="center"  container>
            <Grid  style={{textAlign: "center"}}item sm={12}>
              <WbSunnyIcon />
              <Switch item={true} checked={darkMode} onChange={() => setDarkMode(!darkMode)} name="checkedA" />
              <Brightness3Icon />
              
              </Grid>
                <Grid style={{textAlign: "center", marginBottom: "20px"}} item sm={12}>
                   
                        <Paper>
                            <Locations item={true} />
                        </Paper>
                   
                  
                </Grid>
             
                <Grid style={{textAlign: "center"}}  item sm={12} >
                 
                    <Paper>
                    <Users item={true} />  
                    </Paper>
                
                   

                  
                    </Grid>
               
         
            {/* <Users item={true} /> */}
  
  {/* <Locations item={true} /> */}
  {/* <Switch item={true} checked={darkMode} onChange={() => setDarkMode(!darkMode)} name="checkedA" /> */}
        

       

            </Grid>
        
        
       
      
        </Container>
      </ThemeProvider>

    )
}

export default DarkMode;