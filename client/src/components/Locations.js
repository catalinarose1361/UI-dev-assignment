import {React, useState, useEffect} from 'react';
import axios from 'axios';







function Locations() {

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
        <div>
        <p>Location ID: {data.id}</p>
        <p>Location Name: {data.name}</p>
        <p>Hex Color Stored: {data.hexcolor}</p>
        <p>Logo URL: {data.logo}</p>
        <p>Address:{data.address1} {data.address2}  {data.address3} {data.address4}
   
          </p>
        </div>
      
      )
    })

  )
  

}

export default Locations;