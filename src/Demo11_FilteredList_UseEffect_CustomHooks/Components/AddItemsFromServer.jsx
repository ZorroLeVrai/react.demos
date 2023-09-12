import React from "react";
import useGetData from "../Hooks/useGetData";
import { SERVER_URL } from "../constants";

export default function AddItemsFromServer(props) {
  const { onNewItems } = props;

  const handleItemsFromServer = () => {
    useGetData(SERVER_URL, (e) => e.name, onNewItems);
  };

  return <button onClick={handleItemsFromServer}>Get list from server</button>;
}
