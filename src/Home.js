import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // just to simulate a fetch over the internet
    setTimeout(
      () =>
        fetch("http://localhost:8000/blogs")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setBlogs(data);
          })
          .catch((err) => setMessage("Network error. Please try again later.")),
      1000
    );
  }, []);

  return (
    <div className="home">
      {blogs ? (
        <BlogList blogs={blogs} title="All Blogs!" />
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  );
};

export default Home;
