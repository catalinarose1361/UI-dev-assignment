import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




function Locations() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [api, setApi] = useState([]);
  const query = `{
    
      locationPublicSettings {
        id,
        name,
        hexcolor,
        logo,
        address1,
        address2,
        address3,
        address4
      }
    
  }`

  useEffect(() => {

    axios({
      url: 'https://backendtest.balancescheduler.com/graphql',
      method: 'post',
      data: {
        query

      }
    }).then((result) => {
    
      setApi(result.data.data.locationPublicSettings)
      console.log(api)
    })

   

  })
  return (
    api.map(data => {
      return (
        
   

        <Card alignContent="center" className={classes.root}>
      <CardContent>
        <Typography className={classes.title}  >
        Location ID: {data.id}
        </Typography>
        <Typography className={classes.title}  >
        Location Name: {data.name}
        </Typography>
        <Typography className={classes.title}  >
        Hex Color Stored: {data.hexcolor}
        </Typography>
        <Typography className={classes.title}  >
        Logo URL: {data.logo}
        </Typography>
        <Typography className={classes.title}  >
        Address:{data.address1} {data.address2}  {data.address3} {data.address4}
        </Typography>
      </CardContent>
  
    </Card>
  
      )
    
    })

  )
  

}

export default Locations;