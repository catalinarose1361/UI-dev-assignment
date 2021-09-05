
import React, { useState } from 'react';

import { Grid, Button, Input, Table, TableRow, TableCell } from '@material-ui/core';

function Users() {

  //STATE WILL HOLD ALL USER DATA
  const [users, setUsers] = useState([

    {

      name: "Catalina",

      email: "catalina@catalina.com",

      city: "Colorado Springs"
  
    },

    {

      name: "Matthew",

      email: "matthew@matthew.com",

      city: "Colorado Springs"
  
    },

    {

      name: "Elle",

      email: "elle@elle.com",

      city: "Colorado Springs"
  
    }

  ])

  // THIS STATE STORES NEW USER DATA THAT IS EVENTUALLY ADDED TO "USERS"
  const [user, setUser] = useState(

    {

      name: " ",

      email: " ",

      city: " ",

    }

  )

  //handleChange TRACKS WHAT IS BEING TYPED 
  // 'e' HAS TWO PEICES OF DATA, THE NAME AND VALUE OF INPUTS
  function handleChange(e) {

    const {name, value} = e.target;

    setUser(prevInput => {

      return(

        {

          ...prevInput,

          [name]: value

        }

      )

    })

  }

  function addUser(e) {

    e.preventDefault();

    alert("user added")

    //CREATING A NEW OBJECT THAT GETS ITS DATA FROM "user"
    const newUser = {

      name: user.name,

      email: user.email,

      city: user.city

    }

    //SETTING STATE "users" TO ADD THE newUser OBJECT AT THE END
    setUsers( users => (

      [...users,  newUser]

    ));

    setUser({});

  }

  function removeUser (i) {
   
    const newData = users

    newData.splice(i, 1)

    setUsers(newData)

    alert("User Removed")

  };

  function editUser (i) {

    alert("This feature is not yet operational")

  }

  //VALUE IS SET TO VALUE SAVED IN STATE FOR 'user'
  return (

    <Grid colum  >
                   
      <form>

        <text>

          Name:

        </text>

        <Input 

          onChange={handleChange}

          placeholder="Name" 

          name="name" 

          value={user.name}

        />

        <text>

          Email:

        </text>

        <Input 

          onChange={handleChange} 

          placeholder="Email" 

          name="email" 

          value={user.email}

        />

        <text>

          City:

        </text>

        <Input 

          onChange={handleChange}

          placeholder="City" 

          name="city" 

          value={user.city}

        />
        
        <Button 

          color="default" 

          onClick={addUser}

        >

          ADD USER

        </Button>

      </form>
      
      <Table>
 
        {users.map((user, i) => {

          return (

            <TableRow 

              key={i}

            >

              <TableCell>

                {user.name}

              </TableCell>

              <TableCell>

                {user.email}

              </TableCell>

              <TableCell>

                {user.city}

              </TableCell>

              <TableCell>

                <Button 

                  color="secondary" 

                  onClick={() => editUser(i)}

                >

                  EDIT

                </Button>

              </TableCell>

              <TableCell>

                <Button 

                color="primary" 

                onClick={() => removeUser(i)}

                >

                  DELETE

                </Button>

              </TableCell>

            </TableRow>

          )

        })}

      </Table>
                         
    </Grid>
  
  );

}

export default Users