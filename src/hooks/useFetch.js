import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      setData(data);
      setIsloading(false);
      setError(null);
    } catch (error) {
      setIsloading(false);
      setError(error.message);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, isloading, error };
}