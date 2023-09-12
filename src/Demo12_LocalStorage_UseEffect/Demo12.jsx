import React, { useEffect, useState } from "react";
import useGetData from "./Hooks/useGetData";
import ListItems from "./Components/ListItems";
import { SERVER_URL } from "./constants";

export default function Demo12() {
  const [myList, setMyList] = useState([]);
  const [search, setSearch] = useState("");

  const onReceivedData = (dataList) => {
    setMyList(dataList);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // useEffect(() => {
  //   useGetData(SERVER_URL, null, (it) => it.name, onReceivedData);
  // }, []);

  useEffect(() => {
    console.log("UseEffect");

    if (search === "") {
      // useGetData(SERVER_URL, null, (it) => it.name, onReceivedData);
    } else {
      console.log("Get data", typeof search);

      try {
        const postId = Number(search);
        useGetData(SERVER_URL, { postId }, (it) => it.name, onReceivedData);
      } catch {
        console.log("The parameter should be a number");
      }
    }

    console.log("Search: ", search);
  }, [search]);

  return (
    <>
      <div>
        <label htmlFor="RequestParameter">Search: </label>
        <input id="RequestParameter" onChange={handleChange} />
      </div>
      <ListItems items={myList} />
    </>
  );
}
