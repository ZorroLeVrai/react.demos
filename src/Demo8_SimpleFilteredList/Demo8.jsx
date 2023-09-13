import React, { useRef, useState } from "react";

export default function Demo8() {
  const [myList, setMyList] = useState([]);
  const [filter, setFilter] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    const currentValue = inputRef.current.value;
    e.preventDefault();
    setMyList((currentList) => [...currentList, currentValue]);
    inputRef.current.value = "";
  };

  const handleFilterChange = (e) => {
    //filter next value = e.target.value
    //need to render the component
    setFilter(e.target.value);
  };

  const filteredList = myList.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div style={{ display: "block" }}>
        <label htmlFor="filterItems">Filter</label>
        <input id="filterItems" onChange={handleFilterChange} type="text" />
        <br />
        <br />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="listItem">New Item</label>
        <input ref={inputRef} id="listItem" type="text" />
        <button type="submit">Add item</button>
      </form>
      <div>My list:</div>
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
