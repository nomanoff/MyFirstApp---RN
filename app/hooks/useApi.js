import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const res = await apiFunc();
    setLoading(false);

    if (!res.ok) {
      setError(true);
      console.log("Oops, error!", res.problem);
    }

    setError(false);
    setData(res.data);
  };

  return { data, error, loading, request };
};
