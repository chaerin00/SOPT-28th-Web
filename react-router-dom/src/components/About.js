import React, { useEffect } from "react";

function About(props) {
  useEffect(() => console.log(props), []);
  return <div>About...</div>;
}

export default About;
