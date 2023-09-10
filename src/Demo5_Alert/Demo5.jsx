import { useState } from "react";
import Alert from "./Components/Alert";

export default function Demo5() {
  const [isAlert, setIsAlert] = useState(false);

  const handleIsAlertClick = (e) => setIsAlert(e.target.checked);

  return (
    <>
      <p>
        <label htmlFor="isAlert">Display in Alert</label>
        <input
          type="checkbox"
          id="isAlert"
          value={true}
          onClick={handleIsAlertClick}
        />
      </p>
      <Alert isAlert={isAlert}>This is the text to display</Alert>
    </>
  );
}
