import React, { useRef } from "react";

export default function AddItem(props) {
  const { onNewItem } = props;
  const inputRef = useRef();

  const handleSubmit = (e) => {
    const currentValue = inputRef.current.value;
    e.preventDefault();
    onNewItem(currentValue);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="listItem">New Item</label>
      <input ref={inputRef} id="listItem" type="text" />
      <button type="submit">Add item</button>
    </form>
  );
}
