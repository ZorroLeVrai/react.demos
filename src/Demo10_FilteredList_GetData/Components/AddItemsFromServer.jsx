import React from "react";

export default function AddItemsFromServer(props) {
  const SERVER_URL = "https://jsonplaceholder.typicode.com/users";

  const { onNewItems } = props;

  const addUserNamesToMyList = (data) => {
    const nameList = data.map((e) => e.name);
    onNewItems(nameList);
  };

  const handleItemsFromServer = () => {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => addUserNamesToMyList(data))
      .catch((error) => console.error(error));
  };

  return <button onClick={handleItemsFromServer}>Get list from server</button>;
}
