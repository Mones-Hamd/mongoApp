export const fetchData = async (url, requestOptions) => {
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data;
};
