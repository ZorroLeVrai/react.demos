import React, { useState, useEffect, useMemo, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [dummyState, setDummyState] = useState(false);

  useEffect(() => {
    console.log("Parent rendered");
  });

  const buttonLabel = dummyState ? "On" : "Off";

  const simpleVal = 42;

  const objectVal = useMemo(() => ({ value: simpleVal }), [simpleVal]);

  const cbFunction = useCallback(() => {
    console.log("Callback function called");
  }, []);

  return (
    <>
      <div>Parent</div>
      <button onClick={() => setDummyState((state) => !state)}>
        {buttonLabel}
      </button>
      <Child title="Child n°1" fakeProp={objectVal} />
      <Child title="Child n°2" fakeProp={cbFunction} />
    </>
  );
}
