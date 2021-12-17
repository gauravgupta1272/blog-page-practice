import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPendind, setIsPendind] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
      const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
          setIsPendind(false);
        })
        .catch((err) => {
            if(err.name == 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setIsPendind(false);
                setError(err.message);
            }
          
          
        });
    });
    return ()=> abortCont.abort();
  }, [url]);
  return{data, isPendind, error}
};

export default useFetch;