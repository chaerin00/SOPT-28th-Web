import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import UserCard from './components/userCard';
import Result from './components/result';
import { getUserData } from './lib/api';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [userData, setUserData] = useState({
    status: "idle",
    data: null,
  });

  const getData = async (name) => {
    setUserData({ ...userData, status: "pending" });
    try {
      const data = await getUserData(name);
      if (data === null) throw Error;
      setUserData({ status: "resolved", data: data });
    } catch (e) {
      setUserData({ status: "rejected", data: null });
      console.log(e);
    }
  }

  return (
    <Container>
      <SearchBar getData={getData}></SearchBar>
      <Result userData={userData} />
    </Container>
  );
}

export default App;
