import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url, method, body, token = null) => {
    const response = await fetch(url, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    setData(data);
    setIsLoading(false);
    return data;
  };

  return { isLoading, data, fetchData };
};

export default useFetch;
