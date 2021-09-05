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

      url: 'https://backendtest.balancescheduler.com/graphql',

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

              Location ID: {data.id}

            </Typography>

            <Typography>

              Location Name: {data.name}

            </Typography>

            <Typography>

              Hex Color Stored: {data.hexcolor}

            </Typography>

            <Typography>

              Logo URL: {data.logo}

            </Typography>

            <Typography>

              Address:{data.address1} {data.address2}  {data.address3} {data.address4}

            </Typography>

          </CardContent>
  
        </Card>
  
      )
    
    })

  )
  
}

export default Locations;