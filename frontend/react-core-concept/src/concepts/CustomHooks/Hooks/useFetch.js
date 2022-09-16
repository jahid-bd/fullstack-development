import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      setData(jsonData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError("Server Error Occured");
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
