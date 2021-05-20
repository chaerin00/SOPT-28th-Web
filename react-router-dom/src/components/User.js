import React, { useEffect } from "react";
import Side from "./Side";

function User(props) {
  useEffect(() => console.log(props), []);
  return (
    <>
      <div>User....</div>
      <Side></Side>
    </>
  );
}

export default User;
