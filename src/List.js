import React from "react";

function List(props) {
  console.log(props.item);
  return (
    <div>
      <h1>{props.item.header}</h1>
    </div>
  );
}

export default List;
