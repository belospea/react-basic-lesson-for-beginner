import React from "react";

const MyName = ({ name }) => {
  return <div>Hello! My name is {name}.</div>;
};

MyName.defaultProps = {
  name: "Original Name"
};

export default MyName;
