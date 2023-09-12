import React, { useState } from "react";
import ListItems from "./Components/ListItems";
import FilterList from "./Components/FilterList";
import AddItem from "./Components/AddItem";

export default function Demo9() {
  const [myList, setMyList] = useState([]);
  const [filter, setFilter] = useState("");

  const handleNewItem = (newItem) => {
    setMyList((currentList) => [...currentList, newItem]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredList = myList.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <FilterList onFilterChange={handleFilterChange} />
      <AddItem onNewItem={handleNewItem} />
      <ListItems filteredList={filteredList} />
    </>
  );
}
