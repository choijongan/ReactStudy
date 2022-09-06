import React from 'react'

const Box = (props) => {
    console.log("props:", props);
  return (
    <div className="Box">
      Box{props.num}
      <p>{props.name}</p>
    </div>
  );
};

export default Box