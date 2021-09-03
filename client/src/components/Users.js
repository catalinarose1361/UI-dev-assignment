import React from "react";

import {useState, useEffect} from 'react'


function Users() {
  //using state which at first is empty but soon will store data collected from our MongoDB 
  // note the array of objects
  const [users, setUsers] = useState([
    {
      name: "Catalina",
      email: "catalina@catalina.com",
      city: "Colorado Springs"
  
    }
  ])
  //saves data to be stored in our database
  // note only one object
  const [user, setUser] = useState(
    {
      name: " ",
      email: " ",
      city: " ",
    }
  )


  //handleChange tracks what is being typed 
  // 'e' has two peices of data, the name and value of inputs
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
    console.log("user added")
    //gets values from state
    const newUser = {
      name: user.name,
      email: user.email,
      city: user.city
    }
    setUsers( users => (
       [...users,  newUser]
  ));
  }
// input names are required to parse from body req in our server
//value is set to whatever value was saved in state for movie
  return (
    <div className="App">
      <h1>Add Movie</h1>
      <form>
        
        <input onChange={handleChange} name="name" value={user.name}></input>
        <input onChange={handleChange} name="email" value={user.email}></input>
        <input onChange={handleChange} name="city" value={user.city}></input>
        <button onClick={addUser}>ADD USER</button>
      </form>
      {users.map(user => {
        return (
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.city}</p>
            <button>DELETE</button>
          </div>
        
        )
      })}

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