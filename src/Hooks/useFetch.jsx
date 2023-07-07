import { useEffect, useState } from "react";
import axios from "../server/axios.mjs";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data.results);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, pending };
};

export default useFetch;
