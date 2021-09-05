import {React, useState, useEffect} from 'react';

import axios from 'axios';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

function Locations() {

  //THIS STATE STORES INFORMATION QUERIED FROM THE API
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

  //USE EFFECT CONTINUALLY QUERIES THE API THEN SETS STATE EQUAL TO THE RESULTS
  useEffect(() => {

    axios({

      url: process.env.REACT_APP_API_KEY,

      method: 'post',

      data: {

        query

      }

    }).then((result) => {
    
      setApi(result.data.data.locationPublicSettings)

    })

  })

  return (

    api.map(data => {

      return (
        
        <Card alignContent="center" >

          <CardContent>

            <Typography>

              LOCATION ID: {data.id}

            </Typography>

            <Typography>

              LOCATION NAME:  {data.name}

            </Typography>

            <Typography>

             HEX COLOR STORED: {data.hexcolor}

            </Typography>

            <Typography>

              LOGO URL: {data.logo}

            </Typography>

            <Typography>

              ADDRESS:{data.address1} {data.address2}  {data.address3} {data.address4}

            </Typography>

          </CardContent>
  
        </Card>
  
      )
    
    })

  )
  
}

export default Locations;