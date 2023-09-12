import React from "react";

export default function ListItems(props) {
  const { items } = props;

  return (
    <>
      <div>My list:</div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
