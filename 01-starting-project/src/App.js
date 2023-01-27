import React,{ Fragment, useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString() }];
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>

    </Fragment>
  );
}

export default App;
