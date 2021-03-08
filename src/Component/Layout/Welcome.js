import React from "react";

const Welcome = ({ fontStyle }) => {
  const url = window.location.href;
  const path = url.substring(url.lastIndexOf("/") + 1);
  console.log(path);
  return (
    <div>
      <h1 style={fontStyle}>Welcome In {path} page</h1>
    </div>
  );
};

export default Welcome;
