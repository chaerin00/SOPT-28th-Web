import React from "react";
import { withRouter } from "react-router-dom";

function Side({ history }) {
  const clickHandler = () => {
    history.push("/");
  };
  return <button onClick={clickHandler}>Go Home!</button>;
}

export default withRouter(Side);
