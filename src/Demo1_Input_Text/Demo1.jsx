import { useState } from "react";
import GetProducts from "./Components/GetProducts";

export default function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <input
        type="text"
        className="form-control"
        onChange={(event) => setCategory(event.target.value)}
      ></input>
      <GetProducts category={category}></GetProducts>
    </>
  );
}
