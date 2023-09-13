import { useEffect, useState } from "react";

export default function Demo15() {
  const [newMessage, setNewMessage] = useState("");
  const [fakeMessage, setFakeMessage] = useState("");

  useEffect(() => {
    console.log("useEffect");

    return () => {
      console.log("TEARDOW useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect newMessage");

    return () => {
      console.log("TEARDOW useEffect newMessage");
    };
  }, [newMessage]);

  // JSX: JavaScript XML
  return (
    <>
      <h1>useEffect demo</h1>
      <div>
        <label>New input triggers useEffect</label>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </div>
      <div>
        <label>DOES NOT trigger useEffect</label>
        <input
          type="text"
          value={fakeMessage}
          onChange={(e) => setFakeMessage(e.target.value)}
        />
      </div>
    </>
  );
}
