import React, { useRef, useState } from 'react';

import Card from './UI/Card';
import Button from './UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from './UI/ErrorModal'


const AddUser = (props) => {
  //const [enteredUsername, setEnteredUsername] = useState('');
  //const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const userNameInput = useRef();
  const userAgeInput = useRef();
  const userCollegeInput = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(userNameInput.current.value, userAgeInput.current.value, userCollegeInput.current.value)

    const refName =  userNameInput.current.value;
    const refAge = userAgeInput.current.value;
    const refCollege = userCollegeInput.current.value;

    if (refName.trim().length === 0 || refAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+refAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(refName, refAge, refCollege);
    console.log(refCollege)
    //setEnteredUsername('');
    //setEnteredAge('');
    userNameInput.current.value=''; 
    userAgeInput.current.value='';
    userCollegeInput.current.value='';
  };

  //const usernameChangeHandler = (event) => {
  //  setEnteredUsername(event.target.value);
  //};

  //const ageChangeHandler = (event) => {
    //setEnteredAge(event.target.value);
  //};

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            //value={enteredUsername}
            //onChange={usernameChangeHandler}
            ref={userNameInput}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            //value={enteredAge}
            //onChange={ageChangeHandler}
            ref={userAgeInput}
          />
          <label htmlFor="College_Name">College_Name</label>
          <input
            id="College_Name"
            type="text"
            //value={enteredAge}
            //onChange={ageChangeHandler}
            ref={userCollegeInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;