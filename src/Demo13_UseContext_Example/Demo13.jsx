import React, { useState, createContext } from "react";
import ChildComponent from "./Components/ChildComponent";

export const MyContext = createContext("MyContext");

export default function Demo13() {
  const [text, setText] = useState("");

  const handleTextChange = (nexText) => setText(nexText);

  return (
    <MyContext.Provider value={{ text: text, onChangeText: handleTextChange }}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
