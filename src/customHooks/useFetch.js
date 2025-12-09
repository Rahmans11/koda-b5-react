import { useEffect, useState } from "react";

function useFetch(initialState) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(() => {
    if (typeof initialState === "function") {
      return initialState();
    }
    return initialState;
  });

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const newData = await response.json();
        setIsLoading(false);
        setData(Array.isArray(newData) ? newData : newData.results);
        console.log(newData);

        setError("");
      } catch (err) {
        setError(console.log(err.message));
        setData(null);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { setUrl, data, isLoading, error};
}

export default useFetch;
