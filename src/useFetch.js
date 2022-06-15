import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const abortCont = new AbortController();

    // just to simulate a fetch over the internet
    setTimeout(
      () =>
        fetch(url, { signal: abortCont.signal })
          .then((res) => {
            return res.json();
            // if (!res.ok) {           (another method to handle errors)
            //   throw "error";
            // }
          })
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            if (err.name === "AbortError") {
              console.log("Fetch Aborted");
            } else {
              setMessage("Network error. Please try again later.");
            }
          }),
      500
    );
  }, [url]);

  return { data, message };
};

export default useFetch;
