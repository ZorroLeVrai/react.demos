import React, { useContext } from "react";
import { MyContext } from "../Demo13";

export default function GreatChildComponent() {
  const { text, onChangeText } = useContext(MyContext);

  const handleChange = (e) => {
    onChangeText(e.target.value);
  };

  return (
    <>
      <div>GreatChildComponent</div>
      <div>{`Text: ${text}`}</div>
      <div>
        <label>new text</label>
        <input type="text" onChange={handleChange} />
      </div>
    </>
  );
}
