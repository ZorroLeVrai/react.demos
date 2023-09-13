import React, { useState } from "react";
import ListItems from "./Components/ListItems";
import FilterList from "./Components/FilterList";
import AddItem from "./Components/AddItem";
import AddItemsFromServer from "./Components/AddItemsFromServer";

export default function Demo10_2() {
  const [myList, setMyList] = useState([]);
  const [filter, setFilter] = useState("");

  const handleNewItem = (newItem) => {
    setMyList((currentList) => [...currentList, newItem]);
  };

  const handleSetItems = (newItems) => {
    setMyList([...newItems]);
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
      <AddItemsFromServer onNewItems={handleSetItems} />
      <ListItems filteredList={filteredList} />
    </>
  );
}
