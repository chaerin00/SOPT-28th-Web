import React, { useEffect, useState } from 'react';
import SearchBar from './components/searchBar';
import UserCard from './components/userCard';
import {getUserData} from './lib/api';

function App() {
  const [userData,setUserData]=useState(null);

  const getData=async(name)=>{
    const data=await getUserData(name);
    setUserData(data);
  }
  // useEffect(()=>{
  //   getData("chaerin00");
  //   console.log(userData);
  // },[])
  return (
    <div>
      <SearchBar getData={getData}></SearchBar>
      <UserCard userData={userData}></UserCard>
    </div>
  );
}

export default App;
