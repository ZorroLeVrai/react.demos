import React from "react";
import GreatChildComponent from "./GreatChildComponent";

export default function ChildComponent() {
  return (
    <>
      <div>ChildComponent</div>
      <GreatChildComponent />
    </>
  );
}
