import React from "react";

import { useState } from 'react';
import Button from '@material-ui/core/Button';
function Users() {

  //STATE WILL HOLD ALL USER DATA
  const [users, setUsers] = useState([

    {

      name: "Catalina",

      email: "catalina@catalina.com",

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
    

  }

  function removeUser (i) {
   
    const newData = users
    newData.splice(i, 1)
    setUsers(newData)
    alert("User Removed")

  };

  // function editUser (i) {
  //   let data = users[i]
  //   this.refs.name.value = data.name
  //   this.refs.email.value = data.email
  //   this.refs.city.value = data.city

  //   setUsers({act: 1, index: i})

  //   this.refs.name.focus()
  // }

//VALUE IS SET TO VALUE SAVED IN STATE FOR 'user'
  return (

    <div className="App">

      <form>
        
        <input onChange={handleChange} name="name" value={user.name}></input>

        <input onChange={handleChange} name="email" value={user.email}></input>

        <input onChange={handleChange} name="city" value={user.city}></input>

        <Button onClick={addUser}>ADD USER</Button>

      </form>
      <table>
      <tr>
    <th>Name</th>
    <th>Email</th> 
    <th>City</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
  {users.map((user, i) => {

return (

  <tr key={i}>

    <td>{user.name}</td>

    <td>{user.email}</td>

    <td>{user.city}</td>

    <td>
    <Button>EDIT</Button>
    </td>
    <td>
    <Button onClick={() => removeUser(i)}>DELETE</Button>
    </td>

   

  </tr>

)

})}
      </table>
   

    </div>
  );
}


// export default class Users extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newItem:'' , 
//       items: [
//         { name: "John", dob: "2020-03" },
//         { name: "Key", dob: "2010-07" },
//         { name: "Mo", dob: "2000-08" }
//       ],
//       currentItem: {},
//       currentIndex: -1,
//       editMode: false
//     };
//     this.dataChanged = this.dataChanged.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//     this.handleEditCancel = this.handleEditCancel.bind(this);
//     this.handleUpdate = this.handleUpdate.bind(this);
//   }
//   handleEdit(index) {
//     this.setState({
//       currentIndex: index,
//       editMode: true,
//       currentItem: { ...this.state.items[index] }
//     });
//   }
//   handleDelete(key) {
//     this.setState({
//       items: this.state.items.filter((a, i) => i !== key)
//     });
//   }
//   handleEditCancel(e) {
//     this.setState({
//       currentIndex: -1,
//       editMode: false,
//       currentItem: {}
//     });
//     e.preventDefault();
//   }
//   handleUpdate() {
//     let items = this.state.items;
//     items[this.state.currentIndex] = { ...this.state.currentItem };
//     this.setState({
//       currentIndex: -1,
//       editMode: false,
//       currentItem: {},
//       items: items
//     });
//   }
//   dataChanged(event){
//     let field = event.target.name;
//     let currentItem = {...this.state.currentItem};
//     currentItem[field] = event.target.value;
//     this.setState({currentItem: {...currentItem}});
//   }


//   render() {
//     return (
//       <div className="App">
 


//         <ul>
//           {this.state.items.map((item, key) => (
//             <li key={key}>
//               <span> {item.name} </span>
//               <span> {item.dob} </span>
//               <button
//                 className="btn btn-light"
//                 onClick={() => this.handleEdit(key)}
//               >
//                 edit
//               </button>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => this.handleDelete(key)}
//               >
//                 delete
//               </button>
//             </li>
//           ))}
//         </ul>
//         {this.state.editMode && (
//           <form onSubmit={this.handleUpdate}>
//             <input
//               className=""
//               name="name"
//               value={this.state.currentItem.name}
//               onChange={this.dataChanged}
//               placeholder="Celebrant's Name"
//               ref={name => (this.name = name)}
//               required
//             />
//             <input
//               className=""
//               name="dob"
//               onChange={this.dataChanged}
//               value={this.state.currentItem.dob}
//               type="month"
//             />

//             <button type="submit">update</button>
//             <button onClick={e => this.handleEditCancel(e)}>cancel</button>
//           </form>
//         )}
//       </div>
//     );
//   }
// }

export default Users