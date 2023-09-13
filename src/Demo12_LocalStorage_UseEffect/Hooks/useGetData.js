export default function useGetData(url, params, mapFunc, onDataReceived) {
  const handleData = data => {
    if (!mapFunc) {
      onDataReceived(data);
      return;
    }

    const mappedData = data.map(item => mapFunc(item));
    onDataReceived(mappedData);
  }

  const urlObj = new URL(url);

  if (params)
    Object.keys(params).forEach(item => urlObj.searchParams.append(item, params[item]));

  fetch(urlObj)
    .then((response) => response.json())
    .then((data) => handleData(data))
    .catch((error) => console.error(error));
}