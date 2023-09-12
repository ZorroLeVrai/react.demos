import React from "react";

export default function ListItems(props) {
  const { filteredList } = props;

  return (
    <>
      <div>My list:</div>
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
