import axios from 'axios';
import { useEffect, useState } from 'react';
axios.defaults.url = 'https://jsonplaceholder.typicode.com';
const baseURL = 'https://jsonplaceholder.typicode.com';
const useFetch = (url, method) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  useEffect(() => {
    fetchData();
  }, [url]);
  const fetchData = async () => {
    setloading(true);
    await axios[method](`${baseURL}${url}`)
      .then((response) => {
        setdata(response.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        seterror(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return { data, loading, error };
};

export default useFetch;
