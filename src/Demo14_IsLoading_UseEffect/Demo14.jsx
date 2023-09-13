import React, { useEffect, useState } from "react";

const LOADING_TIME_IN_MS = 5000;

export default function Demo14() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log("Fetching data...");
    setTimeout(() => {
      setIsLoading(false);
      console.log("Data loaded...");
    }, LOADING_TIME_IN_MS);
  }, []);

  return (
    <>
      <div>Demo14</div>
      {isLoading && <p>Loading...</p>}
    </>
  );
}
