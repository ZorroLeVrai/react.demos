import React, { useEffect, useState } from "react";

function Child({ title }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`${title} rendered - counter: ${counter}`);
  });

  const addToCounter = (nb) => setCounter((counter) => counter + nb);

  const style = { border: "2px solid blue", borderRadius: "10px" };

  return (
    <div style={style}>
      <div>{title}</div>
      <div>{counter}</div>
      <div>
        <button onClick={() => addToCounter(1)}>+</button>
        <button onClick={() => addToCounter(-1)}>-</button>
      </div>
    </div>
  );
}

export default Child;
//export default React.memo(Child);
