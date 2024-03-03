import React, { useEffect, useState } from "react";

const useFetch = (fetchFunction, arg) => {
  const [data, setData] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchFunction(arg);
        setData((prev) => {
          return {
            loading: false,
            data,
            error: null,
          };
        });
      } catch (e) {
        setData((prev) => {
          return {
            loading: false,
            data,
            error: e.message,
          };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;
