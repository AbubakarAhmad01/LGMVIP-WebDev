import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Home from './Home';
import Loader from './Loader';
import Navbar from './Navbar';

function App() {
  const [isDataFetch, setisDataFetch]=useState(false);
  const[users, setUsers]= useState([]);
  const[isBtnClick, setisBtnClick]= useState(false);

  const fetchUsers = async () => {
    setisBtnClick(true);
    const response = await fetch('https://reqres.in/api/users');
    const res = await response.json();
    setUsers(res.data);
    setInterval(() => {
      setisDataFetch(true);
    },1500);
  };
  return (
<>
    <Navbar fetchUsers={fetchUsers}/>
    {
      isBtnClick ? (
        isDataFetch ? (
          <Card users= {users}/>
        ):(
         <Loader/> 
        )
      ):(
        <Home/>
      )
    }
</>
  );
}

    

export default App;
