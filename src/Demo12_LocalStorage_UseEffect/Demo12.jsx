import React, { useEffect, useRef, useState } from "react";
import useGetData from "./Hooks/useGetData";
import ListItems from "./Components/ListItems";
import { SERVER_URL } from "./constants";

export default function Demo12() {
  const POST_ID_LOCAL_STORAGE_KEY = "CommentsPostId";
  const [myList, setMyList] = useState([]);
  const [postIdInput, setPostIdInput] = useState("");
  const currentPostId = useRef(null);

  const onReceivedData = (dataList) => {
    setMyList(dataList);
  };

  const handleChange = (e) => {
    currentPostId.current = e.target.value;
    setPostIdInput(e.target.value);
  };

  //useEffect handling local storage
  useEffect(() => {
    //getting data from local storage
    const storedPostId = localStorage.getItem(POST_ID_LOCAL_STORAGE_KEY);
    currentPostId.current = storedPostId;
    setPostIdInput(storedPostId);
  }, []);

  //useEffect handling server requests
  useEffect(() => {
    //setting data in local storage
    localStorage.setItem(POST_ID_LOCAL_STORAGE_KEY, currentPostId.current);

    if (currentPostId.current === "") {
      useGetData(SERVER_URL, null, (it) => it.name, onReceivedData);
    } else {
      try {
        useGetData(
          SERVER_URL,
          { postId: currentPostId.current },
          (it) => it.name,
          onReceivedData
        );
      } catch {
        console.log("The parameter should be a number");
      }
    }
  }, [postIdInput]);

  return (
    <>
      <h2>Search comments by postId</h2>
      <div>
        <label htmlFor="RequestParameter">PostId: </label>
        <input
          type="number"
          id="RequestParameter"
          onChange={handleChange}
          value={postIdInput}
        />
      </div>
      <ListItems items={myList} />
    </>
  );
}
