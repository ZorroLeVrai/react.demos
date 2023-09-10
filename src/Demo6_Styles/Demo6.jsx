import React from "react";
import Button from "./ButtonWithModule";
import Button2 from "./ButtonWithStyle";

export default function Demo6() {
  const onClickHandler = (e) => {
    console.log("Button clicked. Target", e.target);
  };

  return (
    <>
      <div>
        <Button onClickHandler={onClickHandler}>
          <div>Demo6 - Button 1</div>
        </Button>
      </div>
      <div>
        <Button2 onClickHandler={onClickHandler}>
          <div>Demo6 - Button 2</div>
        </Button2>
      </div>
    </>
  );
}
