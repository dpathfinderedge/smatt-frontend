import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
   const fetchData = async () => {
    setLoading(true);

    try {
      const res = await axios.get(url);

      setData(res.data);
      setLoading(false)
    } catch (error) {
      setErr(true);
      setLoading(true)  
    }

    // setLoading(false);
   }

   fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);

    try {
      const res = await axios.get(url);

      setData(res.data);
      setLoading(false)
    } catch (error) {
      setErr(true);  
      setLoading(true)
    }

    // setLoading(false);
   };

   return { data, loading, err, reFetch };
};

export default useFetch;