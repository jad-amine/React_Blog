import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // just to simulate a fetch over the internet
    setTimeout(
      () =>
        fetch(url)
          .then((res) => {
            return res.json();
            // if (!res.ok) {           (another method to handle errors)
            //   throw "error";
            // }
          })
          .then((data) => {
            setData(data);
          })
          .catch((err) => setMessage("Network error. Please try again later.")),
      1000
    );
  }, [url]);

  return { data, message };
};

export default useFetch;
