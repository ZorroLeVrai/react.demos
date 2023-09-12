import React from "react";

export default function FilterList(props) {
  const { onFilterChange } = props;

  return (
    <div>
      <label htmlFor="filterItems">Filter</label>
      <input id="filterItems" onChange={onFilterChange} type="text" />
      <br />
      <br />
    </div>
  );
}
