import { useEffect } from "react";

export default function useGetData(url, mapFunc, onDataReceived) {
  const handleData = data => {
    const mappedData = data.map(item => mapFunc(item));
    onDataReceived(mappedData);
  }

  useEffect(
    () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => handleData(data))
        .catch((error) => console.error(error));
    }  
  );
}